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
 assert.match(src,/radial<4\.5/);
 assert.match(src,/createLinearGradient/);
});
