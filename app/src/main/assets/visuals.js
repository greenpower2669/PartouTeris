(function(root) {
"use strict";
// Lunar Temple: deterministic procedural art, offline and lightweight.
// Geometry/game state remain owned by engine.js.
const TAU=Math.PI*2;
const PALETTE=[
  ["#e6fcff","#62d7f1","#146a91"],
  ["#fff2b8","#e6ae51","#855122"],
  ["#f0e7ff","#ab8cf3","#55469d"],
  ["#ffd8b5","#f47c69","#8b394c"]
];
function shadeFor(color){
  const i=["#67dcf1","#ffd567","#bca5ff","#ff9077"].indexOf(color);
  return PALETTE[Math.max(0,i)];
}
function rng(seed){return function(){seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};}
function position(cx,cy,r,a){return [cx+Math.cos(a)*r,cy+Math.sin(a)*r];}
class Artist {
  constructor(ctx) {
    this.ctx=ctx;
    const rand=rng(72841);this.stars=[];
    for(let i=0;i<170;i++)this.stars.push({x:rand(),y:rand(),r:.25+rand()*1.25,a:.24+rand()*.6});
    this.moonTexture=this.makeMoonTexture();
  }
  makeMoonTexture(){
    const size=640,c=document.createElement("canvas");c.width=size;c.height=size;
    const x=c.getContext("2d"),cx=size/2,cy=size/2,r=size*.47;
    const gradient=x.createRadialGradient(cx-r*.46,cy-r*.50,r*.05,cx,cy,r*1.28);
    gradient.addColorStop(0,"#e6e3d1");gradient.addColorStop(.3,"#b4b9b5");
    gradient.addColorStop(.68,"#6e7f87");gradient.addColorStop(1,"#202e43");
    x.fillStyle=gradient;x.beginPath();x.arc(cx,cy,r,0,TAU);x.fill();
    x.save();x.beginPath();x.arc(cx,cy,r-2,0,TAU);x.clip();
    const random=rng(31317);
    for(let i=0;i<105;i++){
      const xx=cx+(random()*1.8-.9)*r, yy=cy+(random()*1.8-.9)*r;
      if(Math.hypot(xx-cx,yy-cy)>r*.87)continue;
      const cr=(.013+random()*.065)*r;
      x.fillStyle="rgba(25,46,62,.27)";
      x.beginPath();x.ellipse(xx+cr*.21,yy+cr*.28,cr*1.16,cr*.83,random(),0,TAU);x.fill();
      x.strokeStyle="rgba(241,242,222,.38)";x.lineWidth=Math.max(1,cr*.16);
      x.beginPath();x.arc(xx-cr*.12,yy-cr*.12,cr,.15,Math.PI*1.32);x.stroke();
      x.strokeStyle="rgba(22,46,64,.45)";x.lineWidth=Math.max(1,cr*.10);
      x.beginPath();x.arc(xx,yy,cr,-.05,Math.PI);x.stroke();
    }
    for(let i=0;i<1800;i++){
      const xx=cx+(random()*2-1)*r, yy=cy+(random()*2-1)*r;
      if((xx-cx)**2+(yy-cy)**2>r*r)continue;
      x.fillStyle=random()>.54?"rgba(245,245,224,.095)":"rgba(8,27,45,.10)";
      x.fillRect(xx,yy,.6+random()*1.7,.6+random()*1.8);
    }
    // PT-007: Pyramids now live beside the title, leaving the Moon unobstructed.
    // Golden crown / visual focus.
    const glow=x.createRadialGradient(cx,cy-r*.2,3,cx,cy-r*.2,r*.35);
    glow.addColorStop(0,"rgba(255,237,153,.35)");glow.addColorStop(1,"rgba(255,215,140,0)");
    x.fillStyle=glow;x.fillRect(cx-r*.4,cy-r*.58,r*.8,r*.8);
    x.restore();
    x.lineWidth=r*.025;x.strokeStyle="#fff6d089";x.beginPath();x.arc(cx,cy,r-2,3.0,5.25);x.stroke();
    return c;
  }
  backdrop({W,H,cx,cy,inner,outer,stepR,sectors,flash=0,earth=null}){
    const c=this.ctx;
    const deep=c.createRadialGradient(cx,cy,inner*.4,cx,cy,Math.max(W,H)*.74);
    deep.addColorStop(0,"#1c284a");deep.addColorStop(.38,"#080f26");deep.addColorStop(1,"#020512");
    c.fillStyle=deep;c.fillRect(0,0,W,H);
    const nebula=[[.2,.25,.3,"69,75,139"],[.75,.3,.3,"34,90,122"],[.18,.9,.4,"57,55,100"]];
    for(const [xx,yy,sz,col] of nebula){
      const R=Math.max(W,H)*sz,g=c.createRadialGradient(xx*W,yy*H,0,xx*W,yy*H,R);
      g.addColorStop(0,"rgba("+col+",.21)");g.addColorStop(1,"rgba("+col+",0)");
      c.fillStyle=g;c.fillRect(xx*W-R,yy*H-R,R*2,R*2);
    }
    for(let i=0;i<this.stars.length;i++){
      const s=this.stars[i];const x=s.x*W,y=s.y*H;
      c.fillStyle=i%7===0?"rgba(251,222,155,"+s.a+")":"rgba(207,232,255,"+s.a+")";
      c.beginPath();c.arc(x,y,s.r,0,TAU);c.fill();
      if(i%27===0){
        c.strokeStyle="rgba(187,227,254,.24)";c.lineWidth=.7;
        c.beginPath();c.moveTo(x-4,y);c.lineTo(x+4,y);c.moveTo(x,y-4);c.lineTo(x,y+4);c.stroke();
      }
    }
    // Large reserved Earth below the ring: the source of all celebrations.
    if(earth&&earth.r>3){
      const {x,y,r}=earth;
      c.save();
      const aura=c.createRadialGradient(x,y,r*.7,x,y,r*1.8);
      aura.addColorStop(0,"rgba(91,182,255,.28)");aura.addColorStop(1,"rgba(31,111,231,0)");
      c.fillStyle=aura;c.beginPath();c.arc(x,y,r*1.8,0,TAU);c.fill();
      c.shadowColor="#60b7ff";c.shadowBlur=r*.5;
      const ocean=c.createRadialGradient(x-r*.4,y-r*.48,r*.05,x,y,r*1.2);
      ocean.addColorStop(0,"#f0fcff");ocean.addColorStop(.25,"#72e1f1");
      ocean.addColorStop(.60,"#1475ba");ocean.addColorStop(1,"#0a2155");
      c.fillStyle=ocean;c.beginPath();c.arc(x,y,r,0,TAU);c.fill();c.restore();
      c.save();c.beginPath();c.arc(x,y,r*.96,0,TAU);c.clip();
      c.fillStyle="#65c89c";
      c.beginPath();c.moveTo(x-r*.72,y-r*.2);
      c.bezierCurveTo(x-r*.5,y-r*.88,x+r*.10,y-r*.39,x-r*.25,y-r*.03);
      c.bezierCurveTo(x-r*.57,y+r*.28,x-r*.12,y+r*.57,x-r*.32,y+r*.81);
      c.bezierCurveTo(x-r*.85,y+r*.37,x-r*.84,y,x-r*.72,y-r*.20);c.fill();
      c.fillStyle="#62b98c";c.beginPath();c.moveTo(x+r*.20,y-r*.72);
      c.bezierCurveTo(x+r*.85,y-r*.59,x+r*.96,y+r*.16,x+r*.41,y+r*.31);
      c.lineTo(x+r*.27,y+r*.75);
      c.bezierCurveTo(x-r*.04,y+r*.37,x-r*.03,y-r*.22,x+r*.20,y-r*.72);c.fill();
      c.strokeStyle="rgba(244,250,255,.55)";c.lineWidth=Math.max(1,r*.055);
      for(const yy of [-.38,.08,.52]){
        c.beginPath();c.moveTo(x-r*.86,y+r*yy);
        c.bezierCurveTo(x-r*.31,y+r*(yy-.2),x+r*.37,y+r*(yy+.12),x+r*.8,y+r*yy);c.stroke();
      }
      c.restore();
      c.strokeStyle="#daedff9a";c.lineWidth=1.5;
      c.beginPath();c.arc(x,y,r*1.01,-2.35,-.5);c.stroke();
      c.textAlign="center";c.fillStyle="#cee9ff";
      c.font="700 "+Math.max(10,Math.min(13,r*.32))+"px system-ui";
      c.fillText("TERRE",x,y+r+Math.max(10,r*.25));
    }
    // Gold-tech temple orbital machinery, restrained grid for clarity.
    c.save();c.shadowColor="#edb35d";c.shadowBlur=flash>0?16:5;
    c.lineWidth=3;c.strokeStyle="rgba(216,172,96,.50)";
    c.beginPath();c.arc(cx,cy,outer+6,0,TAU);c.stroke();
    c.shadowBlur=0;c.lineWidth=1.1;
    c.strokeStyle="rgba(118,208,230,.11)";
    for(let r=0;r<=Math.round((outer-inner)/stepR);r++){
      c.beginPath();c.arc(cx,cy,inner+r*stepR,0,TAU);c.stroke();
    }
    const len=outer-inner;
    for(let a=0;a<sectors;a++){
      const theta=-Math.PI/2+a*TAU/sectors;
      const [x0,y0]=position(cx,cy,inner,theta);
      const [x1,y1]=position(cx,cy,outer,theta);
      c.strokeStyle=a%12===0?"rgba(242,184,91,.50)":a%4===0?"rgba(96,197,224,.18)":"rgba(105,161,189,.075)";
      c.lineWidth=a%12===0?2:a%4===0?1:.6;
      c.beginPath();c.moveTo(x0,y0);c.lineTo(x1,y1);c.stroke();
    }
    c.strokeStyle="rgba(246,210,140,.60)";c.lineWidth=3;
    for(let k=0;k<4;k++){
      const a=-Math.PI/2+k*Math.PI/2;
      c.beginPath();c.arc(cx,cy,outer+13,a-.17,a+.17);c.stroke();
      for(const d of [-.12,.12]){
        const [x,y]=position(cx,cy,outer+13,a+d);
        c.fillStyle="#e0b36a";c.beginPath();c.arc(x,y,2.3,0,TAU);c.fill();
      }
    }
    c.restore();
  }
  moon({cx,cy,inner}){
    const c=this.ctx,r=inner*.96;
    c.save();c.shadowColor="#a0dfff";c.shadowBlur=r*.28;
    c.fillStyle="#9edaff22";c.beginPath();c.arc(cx,cy,r*1.08,0,TAU);c.fill();
    c.restore();
    c.drawImage(this.moonTexture,cx-r,cy-r,r*2,r*2);
    c.lineWidth=Math.max(1.5,r*.032);c.strokeStyle="#f8d28b99";
    c.beginPath();c.arc(cx,cy,r,3.5,5.55);c.stroke();
  }
  cell({cx,cy,inner,stepR,sector,ring,color,opacity=1,stroke=true}){
    if(ring<0||ring>=10)return;
    const c=this.ctx, palette=shadeFor(color);
    const a0=-Math.PI/2+sector*TAU/48+.009;
    const a1=-Math.PI/2+(sector+1)*TAU/48-.009;
    const low=inner+stepR*ring+1.0,high=inner+stepR*(ring+1)-1;
    const gradient=c.createLinearGradient(...position(cx,cy,high,a0),...position(cx,cy,low,a1));
    gradient.addColorStop(0,palette[0]);gradient.addColorStop(.46,palette[1]);gradient.addColorStop(1,palette[2]);
    c.save();c.globalAlpha=opacity;
    c.beginPath();c.arc(cx,cy,high,a0,a1,false);
    c.arc(cx,cy,low,a1,a0,true);c.closePath();
    c.fillStyle=gradient;c.fill();
    if(stroke){
      c.strokeStyle="rgba(255,252,228,.65)";c.lineWidth=.85;c.stroke();
      c.beginPath();c.arc(cx,cy,high-1.2,a0+.004,a1-.004);
      c.strokeStyle="rgba(255,255,255,.48)";c.lineWidth=1.4;c.stroke();
      c.beginPath();c.arc(cx,cy,low+.5,a0,a1);
      c.strokeStyle="rgba(10,27,44,.65)";c.lineWidth=1.7;c.stroke();
      const mid=(a0+a1)/2;
      const [x,y]=position(cx,cy,(low+high)/2,mid);
      c.fillStyle="rgba(255,255,224,.44)";
      c.beginPath();c.arc(x,y,Math.min(stepR*.10,1.15),0,TAU);c.fill();
    }
    c.restore();
  }
  parachute({x,y,angle,color,size=18,time=0}){
    const c=this.ctx;
    c.save();c.translate(x,y);c.rotate(angle+Math.PI/2);
    const s=Math.max(10,Math.min(23,size)),sway=Math.sin(time*2.1+x*.03)*s*.08;
    c.translate(sway,0);
    // Articulated gold solar sail: not a plain semicircle.
    c.save();c.shadowColor="#eac577";c.shadowBlur=7;
    const g=c.createLinearGradient(-s,-s,s,s);
    g.addColorStop(0,"#fff3cc");g.addColorStop(.55,"#9fbbbe");g.addColorStop(1,"#c59b50");
    c.fillStyle=g;c.strokeStyle="#f5d39a";c.lineWidth=1.6;
    c.beginPath();c.moveTo(-s*.98,-s*.27);
    c.quadraticCurveTo(-s*.8,-s*1.18,0,-s*1.15);
    c.quadraticCurveTo(s*.8,-s*1.18,s*.98,-s*.27);
    c.quadraticCurveTo(0,-s*.63,-s*.98,-s*.27);
    c.closePath();c.fill();c.stroke();c.restore();
    c.strokeStyle="#fce6b1b5";c.lineWidth=.95;
    for(const f of [-.98,-.4,.4,.98]){
      c.beginPath();c.moveTo(s*f,-s*.27);c.lineTo(0,s*.78);c.stroke();
    }
    c.fillStyle=color;c.strokeStyle="#fff9d2";c.lineWidth=1;
    c.beginPath();c.moveTo(0,s*.38);c.lineTo(s*.32,s*.78);c.lineTo(0,s*1.06);c.lineTo(-s*.32,s*.78);c.closePath();c.fill();c.stroke();
    c.strokeStyle="#7cf2f4";c.lineWidth=2;c.beginPath();c.moveTo(-s*.18,s*.83);c.lineTo(s*.18,s*.83);c.stroke();
    c.restore();
  }
  energy({cx,cy,inner,outer,flash,time=0}){
    const c=this.ctx;
    c.save();const a=.13+Math.max(0,flash)*.54;
    const g=c.createRadialGradient(cx,cy,inner,cx,cy,outer+30);
    g.addColorStop(0,"rgba(249,187,103,0)");
    g.addColorStop(.66,"rgba(231,178,95,"+(a*.26)+")");
    g.addColorStop(.92,"rgba(109,226,245,"+(a*.34)+")");
    g.addColorStop(1,"rgba(82,178,237,0)");
    c.fillStyle=g;c.beginPath();c.arc(cx,cy,outer+25,0,TAU);c.fill();
    c.globalAlpha=.37+flash*.40;
    c.shadowColor="#f6ca8d";c.shadowBlur=flash*23+4;
    c.lineWidth=flash>0?3.6:1.4;
    for(let k=0;k<4;k++){
      const th=time*.085+k*Math.PI/2;
      c.strokeStyle=k%2===0?"#dbb978":"#79dfea";
      c.beginPath();c.arc(cx,cy,outer+8,th,th+.22);c.stroke();
    }
    c.restore();
  }
}
root.PartouVisuals={Artist};
if(typeof module!=="undefined"&&module.exports)module.exports={Artist};
})(typeof globalThis!=="undefined"?globalThis:this);
