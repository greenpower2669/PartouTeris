const test = require('node:test');
const assert = require('node:assert/strict');
const {Game,SECTORS,RINGS,cellsOf} = require('../app/src/main/assets/engine.js');

test('Four directions have four independent falling pieces', () => {
  const g=new Game(()=>0);assert.equal(g.pieces.length,4);
  assert.ok(g.pieces.every(p=>p!==null));assert.equal(g.board.length,RINGS);
  assert.ok(g.board.every(r=>r.length===SECTORS));
});
test('Angular seam is continuous at 360 degrees',()=>{
  const p={type:0,angle:0,radius:5,rot:0};
  assert.ok(cellsOf(p).some(([a])=>a===47));
});
test('Landing ghost stops at lunar surface',()=>{
  const g=new Game(()=>0);
  assert.equal(g.ghost(g.pieces[0]),0);
});
test('Rotations and tangential moves remain legal',()=>{
  const g=new Game(()=>0);const p=g.pieces[0];
  assert.equal(g.shift(0,1),true);assert.equal(p.angle,1);
  assert.equal(g.rotate(0),true);assert.equal(p.rot,1);
});
test('Full 48 cell ring clears and overlying material moves inward',()=>{
  const g=new Game(()=>0);g.board[0].fill(0);g.board[1][0]=2;
  assert.equal(g.clearRings(),1);assert.equal(g.board[0][0],2);
  assert.equal(g.board[1][0],-1);assert.equal(g.cleared,1);
});
test('Incomplete ring stays',()=>{
  const g=new Game(()=>0);g.board[0].fill(0);g.board[0][1]=-1;
  assert.equal(g.clearRings(),0);
});
test('Four lanes move under gravity and pause freezes',()=>{
  const g=new Game(()=>0);const original=g.pieces.map(p=>p.radius);
  for(let i=0;i<9;i++)g.step(.12);
  assert.ok(g.pieces.every((p,i)=>p.radius<original[i]));
  const stamp=g.seconds;g.paused=true;g.step(2);assert.equal(g.seconds,stamp);
});
test('Blocked moves cannot overwrite occupied sector',()=>{
  const g=new Game(()=>0);let p=g.pieces[0];
  p.radius=1;g.board[1][6]=3;
  assert.equal(g.canPlace(p),false);
});
test('Overflow ends game instead of silently losing cells',()=>{
  const g=new Game(()=>0);
  g.pieces[0].radius=RINGS+1;g.lock(0);assert.equal(g.over,true);
});
