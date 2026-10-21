const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const {Soundtrack}=require('../app/src/main/assets/audio.js');
test('PT-013 official soundtrack URL is separate from synthesis fallback',()=>{
 const s=new Soundtrack();
 assert.equal(s.officialUrl,'official-theme.mp3');
 assert.equal(s.official,null);
 assert.equal(s.officialFailed,false);
});
test('PT-013 official music and design remain offline, immutable reference assets',()=>{
 const mp3=fs.readFileSync('app/src/main/assets/official-theme.mp3');
 assert.equal(mp3.subarray(0,3).toString('latin1'),'ID3');
 assert.ok(mp3.length>1000000);
 const png=fs.readFileSync('design/charte-officielle.png');
 assert.equal(png.subarray(0,8).toString('hex'),'89504e470d0a1a0a');
 assert.ok(png.length>100000);
});
test('PT-013 offline UI does not request external streaming',()=>{
 const html=fs.readFileSync('app/src/main/assets/index.html','utf8');
 const audio=fs.readFileSync('app/src/main/assets/audio.js','utf8');
 assert.ok(audio.includes('official-theme.mp3'));
 assert.ok(!audio.includes('http://')&&!audio.includes('https://'));
 assert.ok(html.includes('PARTOUTETRIS'));
});
