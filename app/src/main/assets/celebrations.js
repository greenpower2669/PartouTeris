(function(root){
"use strict";
// Block Boost inspired scenes; fully original, offline, no imported private FX.
const FIREWORKS_STEP=1000,FIREWORKS_DURATION=5600;
const COLORS=["#ffd578","#72e8ff","#ff9dd8","#acebbe","#c3b5ff","#fff2c1"];
function milestones(before,after,step=FIREWORKS_STEP){
 if(!Number.isSafeInteger(before)||!Number.isSafeInteger(after)||before<0||after<=before||!Number.isSafeInteger(step)||step<=0)return [];
 const start=Math.floor(before/step)+1,end=Math.floor(after/step);
 return end<start?[]:[start*step,end*step];
}
function chooseScene(event){
 if(!event)return null;
 if(event.type==="milestone")return {
   kind:"fireworks",priority:3,duration:FIREWORKS_DURATION,
   title:event.reached===event.upto?"🎆 "+event.reached.toLocaleString("fr-FR")+" POINTS !":"🎆 "+event.reached.toLocaleString("fr-FR")+" À "+event.upto.toLocaleString("fr-FR")+" POINTS !"
 };
 if(event.type==="ring"&&event.count>=2)return {
   kind:"disco",priority:2,duration:4100,
   title:"🪩 DOUBLE COURONNE !",subtitle:"+"+event.gained+" POINTS · COMBO ×"+event.combo
 };
 if(event.type==="ring")return {
   kind:"bubbles",priority:1,duration:2900,
   title:"🫧 COURONNE TERMINÉE !",subtitle:"+"+event.gained+" POINTS"
 };
 return null;
}
class Festival {
 constructor(element,{reduced=()=>false}={}){
   this.root=element;this.reduced=reduced;this.scene=null;this.priority=0;this.timer=null;
   this.pos={cx:0,cy:0,outer:1,inner:0,stepR:1,earth:{x:0,y:0,r:1}};
   this.root.setAttribute("aria-hidden","true");
 }
 position(p){
   this.pos={...this.pos,...p};
   const {cx,cy,outer}=this.pos;
   this.root.style.setProperty("--fx-x",cx+"px");
   this.root.style.setProperty("--fx-y",cy+"px");
   this.root.style.setProperty("--fx-r",outer+"px");
   const e=this.pos.earth||{x:cx,y:cy,r:1};
   this.root.style.setProperty("--earth-x",e.x+"px");
   this.root.style.setProperty("--earth-y",e.y+"px");
   this.root.style.setProperty("--earth-r",e.r+"px");
 }
 stop(){
   if(this.timer)clearTimeout(this.timer);
   this.timer=null;this.scene=null;this.priority=0;this.root.replaceChildren();
 }
 reset(){this.stop();}
 floatScore(event){
   if(this.reduced()||this.root.querySelectorAll(".fx-float").length>=7)return;
   // Points earned appear in the free band BELOW the lunar board.
   const {cx,cy,outer,earth}=this.pos;
   const y=Math.min((earth?.y||cy+outer+25)-7,cy+outer+33);
   const x=cx-outer*.40+((event.lane||0)%2)*17;
   const node=document.createElement("span");
   node.className="fx-float";node.textContent="+"+event.gained+(event.multiplier>1?" ×"+event.multiplier:"");
   node.style.left=x+"px";node.style.top=y+"px";
   this.root.appendChild(node);
   setTimeout(()=>node.remove(),920);
 }
 particles(kind){
   if(this.reduced())return;
   const box=document.createElement("div");box.className="fx-burst fx-"+kind;
   const amount=kind==="fireworks"?25:kind==="disco"?26:18;
   for(let i=0;i<amount;i++){
     const spark=document.createElement("i");
     const {cx,cy,outer,earth}=this.pos;
     const e=earth||{x:cx,y:cy};
     const theta=i*2.399963;
     const dist=outer*(.25+.62*((i*17)%23)/22);
     spark.style.setProperty("--tx",(cx+Math.cos(theta)*dist-e.x).toFixed(1)+"px");
     spark.style.setProperty("--ty",(cy+Math.sin(theta)*dist-e.y).toFixed(1)+"px");
     spark.style.setProperty("--delay",(i*71%1300)+"ms");
     spark.style.setProperty("--color",COLORS[i%COLORS.length]);
     spark.style.setProperty("--size",(kind==="bubbles"?9+i%5*5:3+i%4*2)+"px");
     box.appendChild(spark);
   }
   if(kind==="disco"){
     const ball=document.createElement("div");ball.className="fx-mirrorball";
     const tiles=document.createElement("div");tiles.className="fx-mirror-tiles";
     ball.appendChild(tiles);box.appendChild(ball);
   }
   if(kind==="disco"||kind==="bubbles"||kind==="fireworks"){
     const {cx,cy,earth}=this.pos,e=earth||{x:cx,y:cy};
     const dx=cx-e.x,dy=cy-e.y;
     const beam=document.createElement("div");beam.className="fx-earth-beam";
     beam.style.setProperty("--beam-length",Math.hypot(dx,dy)+"px");
     beam.style.setProperty("--beam-angle",Math.atan2(-dx,dy)+"rad");
     box.appendChild(beam);
   }
   this.root.appendChild(box);
 }
 show(event){
   const scene=chooseScene(event);if(!scene)return;
   if(this.scene&&scene.priority<this.priority)return;
   this.stop();this.scene=scene.kind;this.priority=scene.priority;
   const banner=document.createElement("div");banner.className="fx-banner fx-banner-"+scene.kind;
   const title=document.createElement("strong");title.textContent=scene.title;banner.appendChild(title);
   if(scene.subtitle){const small=document.createElement("small");small.textContent=scene.subtitle;banner.appendChild(small);}
   this.root.appendChild(banner);
   this.particles(scene.kind);
   this.timer=setTimeout(()=>this.stop(),this.reduced()?1400:scene.duration);
 }
 handle(event){
   if(!event)return;
   if(event.type==="points"&&event.reason==="placement")this.floatScore(event);
   else if(event.type==="ring"||event.type==="milestone")this.show(event);
 }
}
root.PartouFestival={Festival,chooseScene,milestones,FIREWORKS_STEP,FIREWORKS_DURATION};
if(typeof module!=="undefined"&&module.exports)module.exports={Festival,chooseScene,milestones,FIREWORKS_STEP,FIREWORKS_DURATION};
})(typeof globalThis!=="undefined"?globalThis:this);
