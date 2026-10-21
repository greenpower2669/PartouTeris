const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const {milestones,chooseScene,FIREWORKS_DURATION}=require('../app/src/main/assets/celebrations.js');
test('Milestone windows are correct and bounded',()=>{
  assert.deepEqual(milestones(0,999),[]);
  assert.deepEqual(milestones(999,1000),[1000,1000]);
  assert.deepEqual(milestones(250,3200),[1000,3000]);
  assert.deepEqual(milestones(800,800),[]);
  assert.deepEqual(milestones(-1,1200),[]);
});
test('Single-ring bubbles; double-ring disco; every 1000 fireworks',()=>{
  assert.equal(chooseScene({type:'ring',count:1,gained:480,combo:1}).kind,'bubbles');
  assert.equal(chooseScene({type:'ring',count:2,gained:1920,combo:1}).kind,'disco');
  const scene=chooseScene({type:'milestone',reached:1000,upto:1000});
  assert.equal(scene.kind,'fireworks');assert.equal(scene.duration,FIREWORKS_DURATION);
});
test('Ordinary placements do not trigger obstructing full-screen scenes',()=>{
  assert.equal(chooseScene({type:'points',reason:'placement',gained:40}),null);
});
test('Portrait UI connects noninteractive FX and soft-effects preference',()=>{
  const html=fs.readFileSync('app/src/main/assets/index.html','utf8');
  assert.match(html,/<script src="celebrations.js"><\/script>/);
  assert.match(html,/id="scoreBurst"/);
  assert.match(html,/#scoreBurst\s*\{[^}]*pointer-events:none/);
  assert.match(html,/festival\.handle\(ev\)/);
  assert.match(html,/id="reducedCelebrations"/);
  assert.match(html,/festival\.reset\(\)/);
});
test('Reduced-motion support disables visually active particles',()=>{
  const html=fs.readFileSync('app/src/main/assets/index.html','utf8');
  assert.match(html,/prefers-reduced-motion:reduce/);
  assert.match(html,/\.fx-reduced \.fx-burst/);
});
