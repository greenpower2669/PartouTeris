const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs'),vm=require('node:vm');
test('Procedural lunar artist parses as strict JavaScript and is included in game',()=>{
  const p='app/src/main/assets/visuals.js';
  assert.doesNotThrow(()=>new vm.Script(fs.readFileSync(p,'utf8')));
  const html=fs.readFileSync('app/src/main/assets/index.html','utf8');
  assert.match(html,/<script src="visuals.js"><\/script>/);
  assert.match(html,/new window.PartouVisuals.Artist\(ctx\)/);
  assert.match(html,/art\.backdrop\(/);
  assert.match(html,/art\.cell\(/);
  assert.match(html,/art\.moon\(/);
});

test('Incoming flaming trails and Earth laser are visual-only Canvas primitives',()=>{
 const src=fs.readFileSync('app/src/main/assets/visuals.js','utf8');
 assert.match(src,/incoming\(\{/);
 assert.match(src,/laser\(\{/);
 assert.match(src,/radial<9/);
 assert.match(src,/createLinearGradient/);
});

test('No parachutes in the game or in space (artist or entry point)',()=>{
 const art=fs.readFileSync('app/src/main/assets/visuals.js','utf8');
 const html=fs.readFileSync('app/src/main/assets/index.html','utf8');
 assert.doesNotMatch(art,/parachute\s*\(/);
 assert.doesNotMatch(html,/parachute\s*\(/);
});
test('Three terrestrial satellites are positioned and used as convergent laser emitters',()=>{
 const art=fs.readFileSync('app/src/main/assets/visuals.js','utf8');
 const html=fs.readFileSync('app/src/main/assets/index.html','utf8');
 assert.match(art,/satelliteOrigins\(\{/);
 assert.match(art,/satellites\(\{/);
 assert.match(html,/const emitters=art\.satellites\(/);
 assert.match(html,/for\(const shot of laserShots\)for\(const from of emitters\)/);
});
test('Outer flight debris remains visually rendered beyond the ten radial rings',()=>{
 const art=fs.readFileSync('app/src/main/assets/visuals.js','utf8');
 assert.match(art,/ring>=16/);
 assert.match(art,/space=stepR\*\.58/);
 assert.match(art,/radial<9/);
 assert.doesNotMatch(art,/pyramid\(cx[+-]/);
});

test('Authentic user icon is present as Android drawable and as in-game image',()=>{
 const art='app/src/main/assets/brand-icon.webp',launcher='app/src/main/res/drawable-nodpi/icon.webp';
 assert.ok(fs.existsSync(art));assert.ok(fs.existsSync(launcher));
 assert.deepEqual(fs.readFileSync(art),fs.readFileSync(launcher));
 const html=fs.readFileSync('app/src/main/assets/index.html','utf8');
 const manifest=fs.readFileSync('app/src/main/AndroidManifest.xml','utf8');
 assert.match(html,/<img class="pyramids-mark" src="brand-icon.webp"/);
 assert.match(manifest,/android:icon="@drawable\/icon"/);
 assert.equal(fs.existsSync('app/src/main/res/drawable/icon.xml'),false);
});

test('The optimized user icon has the exact validated Git binary hash',()=>{
 const crypto=require('node:crypto');
 const p='app/src/main/assets/brand-icon.webp';
 const data=fs.readFileSync(p);
 const gitBlob=Buffer.concat([Buffer.from('blob '+data.length+'\0'),data]);
 assert.equal(crypto.createHash('sha1').update(gitBlob).digest('hex'),'e0eedc703359d7e27be9501b0f3c67bec1186229');
});
