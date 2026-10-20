const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs'),vm=require('node:vm');
const {Soundtrack,PHRASE,MELODY}=require('../app/src/main/assets/audio.js');
test('Melodic pattern includes note and rest, complete loop',()=>{
  assert.equal(PHRASE.length,16);assert.ok(PHRASE.includes(-1));
  assert.ok(MELODY.length>=7);
});
test('Audio initializes lazily and safely without WebAudio',()=>{
  const s=new Soundtrack();assert.equal(s.context,null);
  assert.equal(s.start(),false);s.tick(false);s.cue('lock');
});
test('Sound levels clamp and muting persists',()=>{
  const s=new Soundtrack();s.setVolumes(-1,9);
  assert.equal(s.musicVolume,0);assert.equal(s.effectsVolume,1);
  s.setEnabled(false);assert.equal(s.enabled,false);
});
test('Browser inline script parses',()=>{
  const html=fs.readFileSync('app/src/main/assets/index.html','utf8');
  const scripts=[...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)].map(x=>x[1]).filter(Boolean);
  assert.ok(scripts.length>0);
  for(const script of scripts)assert.doesNotThrow(()=>new vm.Script(script));
});
