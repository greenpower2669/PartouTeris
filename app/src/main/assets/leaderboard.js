(function(root){
"use strict";
const KEY="partoutetris-leaderboard-v1",PREVIOUS_RECORD="partouteris-record";
function cleanName(value) {
  const text=String(value??"").replace(/[<>\x00-\x1f\x7f]/g,"").trim().replace(/\s+/g," ");
  return Array.from(text).slice(0,16).join("")||"PHARAON";
}
function normalize(items) {
  if(!Array.isArray(items))return [];
  return items.filter(x=>x&&Number.isSafeInteger(x.score)&&x.score>0)
    .map(x=>({name:cleanName(x.name),score:x.score,at:Number.isFinite(x.at)?x.at:0}))
    .sort((a,b)=>b.score-a.score||a.at-b.at).slice(0,10);
}
class Leaderboard {
  constructor(storage){
    this.storage=storage;this.scores=[];this.name="PHARAON";
    if(!storage)return;
    try{
      const raw=JSON.parse(storage.getItem(KEY)||"{}");
      this.name=cleanName(raw.name);
      this.scores=normalize(raw.scores);
      // The previous single best record must not be lost on upgrade.
      const legacy=Number(storage.getItem(PREVIOUS_RECORD)||0);
      if(Number.isSafeInteger(legacy)&&legacy>0&&!this.scores.some(x=>x.score===legacy))
        this.scores=normalize([...this.scores,{name:"ANCIEN RECORD",score:legacy,at:0}]);
    }catch(e){this.name="PHARAON";this.scores=[];}
  }
  setName(value){this.name=cleanName(value);this.save();return this.name;}
  add(score,at=Date.now()){
    if(!Number.isSafeInteger(score)||score<=0)return false;
    this.scores=normalize([...this.scores,{name:this.name,score,at}]);
    this.save();return true;
  }
  top(amount=3){return this.scores.slice(0,Math.max(0,Math.min(10,amount)));}
  best(){return this.scores.length?this.scores[0].score:0;}
  save(){
    try{this.storage?.setItem(KEY,JSON.stringify({name:this.name,scores:this.scores}));}catch(e){}
  }
}
root.PartouScores={Leaderboard,cleanName,normalize,KEY};
if(typeof module!=="undefined"&&module.exports)module.exports={Leaderboard,cleanName,normalize,KEY};
})(typeof globalThis!=="undefined"?globalThis:this);
