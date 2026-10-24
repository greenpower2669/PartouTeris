(function(root){
  "use strict";
  // PT-039: a self-contained Earth-defense vignette, never a gameplay tetromino.
  // No collisions, no lane changes, no Hall of Fame mutation here.
  const SHAPES=[
    [[-1,0],[0,0],[1,0],[2,0]],[[0,0],[1,0],[0,1],[1,1]],
    [[-1,0],[0,0],[1,0],[1,1]],[[-1,1],[-1,0],[0,0],[1,0]],
    [[-1,0],[0,0],[0,1],[1,1]],[[-1,1],[0,1],[0,0],[1,0]],
    [[-1,0],[0,0],[1,0],[0,1]]
  ];
  const COLORS=["#49e9ff","#ffb95a","#be91ff","#75f0b2","#ff7598","#ffe17c","#6aa7ff"];
  const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
  function defenseBonus(fallSeconds){
    // Square of PERMANENT gravity only (8 sec baseline); no touch x10 exploit.
    const ratio=8/(Number.isFinite(fallSeconds)&&fallSeconds>0?fallSeconds:8);
    return Math.round(120*clamp(ratio*ratio,1,25));
  }
  class EarthEvents {
    constructor(rng=Math.random){this.rng=rng;this.reset();}
    random(){return clamp(Number(this.rng())||0,0,0.9999999);}
    reset(now=0){
      this.active=null;this.effects=[];this.lastType=-1;
      this.nextAt=now+9+this.random()*5;
    }
    spawn(now,{W,earth}){
      if(this.active||!earth||!Number.isFinite(W)||W<=0)return null;
      // Seven rotating mino silhouettes, with no consecutive repeated shape.
      const n=SHAPES.length;
      let type=Math.floor(this.random()*(this.lastType<0?n:n-1));
      if(this.lastType>=0&&type>=this.lastType)type++;
      this.lastType=type;
      const side=this.random()<.5?-1:1;
      const x0=side<0?-22:W+22;
      const targetX=earth.x+(this.random()-.5)*earth.r*.95;
      const surfaceY=earth.y-earth.r;
      this.active={type,side,start:now,duration:5.5+this.random()*2,
        x0,y0:surfaceY-120-this.random()*46,
        endX:targetX,endY:surfaceY+9,spin:this.random()*Math.PI*2};
      this.nextAt=now+17+this.random()*12;
      return {type:"earth-spawn",form:type};
    }
    position(active=this.active,now=0){
      if(!active)return null;
      const t=clamp((now-active.start)/active.duration,0,1);
      const e=t*t*(3-2*t);
      return {x:active.x0+(active.endX-active.x0)*e,
        y:active.y0+(active.endY-active.y0)*e,
        t,angle:active.spin+3.8*t,form:active.type};
    }
    resolve(now,reason){
      if(!this.active)return null;
      const obj=this.active,point=this.position(obj,now);
      this.active=null;
      this.effects.push({...point,start:now,reason,form:obj.type});
      if(this.effects.length>7)this.effects.shift();
      return {type:"earth-impact",reason,x:point.x,y:point.y,form:obj.type};
    }
    tick(now,geometry){
      if(!Number.isFinite(now))return [];
      this.effects=this.effects.filter(e=>now-e.start<1.15);
      if(!this.active){
        if(now>=this.nextAt){
          const ev=this.spawn(now,geometry);
          return ev?[ev]:[];
        }
        return [];
      }
      if(now-this.active.start>=this.active.duration){
        // Sometimes it explodes on its own, otherwise a satellite intercepts.
        return [this.resolve(now,this.random()<.65?"satellite":"spontaneous")];
      }
      return [];
    }
    hit(x,y,now,fallSeconds){
      if(!Number.isFinite(x)||!Number.isFinite(y)||!this.active)return null;
      const p=this.position(this.active,now);
      if(!p||p.t>=1||Math.hypot(p.x-x,p.y-y)>30)return null;
      const ev=this.resolve(now,"player");
      return {...ev,bonus:defenseBonus(fallSeconds)};
    }
    draw(ctx,{now,reduced=false,emitters=[]}={}){
      if(!ctx||!Number.isFinite(now))return;
      const p=this.position(this.active,now);
      if(p){
        const shape=SHAPES[p.form],color=COLORS[p.form];
        ctx.save();
        ctx.translate(p.x,p.y);ctx.rotate(p.angle);
        // A gently oscillating hot tail shows direction and makes targeting legible.
        ctx.shadowColor=color;ctx.shadowBlur=reduced?5:16;
        ctx.strokeStyle=color;ctx.lineWidth=3;ctx.globalAlpha=reduced?.35:.55;
        ctx.beginPath();ctx.moveTo(-9,14);ctx.lineTo(-24-p.t*10,36);ctx.stroke();
        ctx.globalAlpha=.95;
        for(const [sx,sy] of shape){
          ctx.fillStyle=color;ctx.fillRect(sx*10-4.5,sy*10-4.5,9,9);
          ctx.strokeStyle="#f4fbff";ctx.lineWidth=.9;
          ctx.strokeRect(sx*10-4.5,sy*10-4.5,9,9);
        }
        ctx.restore();
      }
      for(const e of this.effects){
        const life=clamp((now-e.start)/1.15,0,1);
        const alpha=1-life;
        ctx.save();
        const color=e.reason==="player"?"#ffe77c":e.reason==="satellite"?"#65eaff":"#ff964f";
        if(e.reason==="satellite"&&emitters.length){
          const source=emitters[e.form%emitters.length];
          if(source&&Number.isFinite(source.x)&&Number.isFinite(source.y)){
            ctx.strokeStyle="#8bf5ff";ctx.lineWidth=3.2*alpha;ctx.shadowColor="#55eaff";
            ctx.shadowBlur=reduced?3:12;
            ctx.beginPath();ctx.moveTo(source.x,source.y);ctx.lineTo(e.x,e.y);ctx.stroke();
          }
        }
        ctx.globalAlpha=alpha;ctx.strokeStyle=color;ctx.shadowColor=color;
        ctx.shadowBlur=reduced?3:13;ctx.lineWidth=2.5;
        ctx.beginPath();ctx.arc(e.x,e.y,6+life*(reduced?19:43),0,Math.PI*2);ctx.stroke();
        if(!reduced){
          for(let k=0;k<12;k++){
            const a=k*Math.PI/6+e.form*.5;
            const length=8+life*(26+(k%3)*7);
            ctx.beginPath();ctx.moveTo(e.x+Math.cos(a)*8,e.y+Math.sin(a)*8);
            ctx.lineTo(e.x+Math.cos(a)*length,e.y+Math.sin(a)*length);ctx.stroke();
          }
        }
        ctx.restore();
      }
    }
  }
  root.PartouEarthEvents={EarthEvents,defenseBonus,SHAPES};
  if(typeof module!=="undefined"&&module.exports)
    module.exports={EarthEvents,defenseBonus,SHAPES};
})(typeof globalThis!=="undefined"?globalThis:this);
