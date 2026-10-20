(function(root) {
  "use strict";
  // The first contact is a persistent grip. Short taps by another finger
  // rotate ONLY that gripped piece, without stealing selection or movement.
  class TwoHandControls {
    constructor({sectorCount=48,chooseLane,onSelect,onMove,onRotate,onBoost}) {
      this.sectorCount=sectorCount;
      this.chooseLane=chooseLane;
      this.onSelect=onSelect;
      this.onMove=onMove;
      this.onRotate=onRotate;
      this.onBoost=onBoost;
      this.grip=null;
      this.taps=new Map();
      this.tapDistance=26;  // tolerance in CSS pixels
      this.tapDuration=360; // long touches never rotate
    }
    isGripping(){return this.grip!==null;}
    down(p) {
      if(this.grip && this.grip.id===p.id)return false;
      if(!this.grip){
        const lane=this.chooseLane(p.angle);
        this.grip={id:p.id,lane,lastAngle:p.angle,accumulator:0,startDistance:p.distance};
        this.onSelect(lane);
        return true;
      }
      if(this.taps.has(p.id))return false;
      this.taps.set(p.id,{x:p.x,y:p.y,time:p.time});
      return true;
    }
    move(p) {
      if(this.grip && p.id===this.grip.id) {
        const g=this.grip,n=this.sectorCount;
        const delta=((p.angle-g.lastAngle+n*1.5)%n+n)%n-n/2;
        g.lastAngle=p.angle;
        g.accumulator+=delta;
        for(let i=0;Math.abs(g.accumulator)>=.8&&i<8;i++){
          const direction=Math.sign(g.accumulator);
          this.onMove(g.lane,direction);
          g.accumulator-=direction;
        }
        this.onBoost(g.lane,p.distance<g.startDistance-17);
        return true;
      }
      return this.taps.has(p.id);
    }
    up(p) {
      if(this.grip && p.id===this.grip.id){
        this.reset();
        return "release";
      }
      const t=this.taps.get(p.id);
      if(!t)return null;
      this.taps.delete(p.id);
      const shortTap=p.time>=t.time && p.time-t.time<=this.tapDuration;
      const stable=Math.hypot(p.x-t.x,p.y-t.y)<=this.tapDistance;
      if(this.grip&&shortTap&&stable){
        this.onRotate(this.grip.lane);
        return "rotate";
      }
      return "ignored";
    }
    cancel(p) {
      if(this.grip&&this.grip.id===p.id){
        this.reset();
      } else this.taps.delete(p.id);
    }
    reset() {
      if(this.grip)this.onBoost(this.grip.lane,false);
      this.grip=null;
      this.taps.clear();
    }
  }
  root.PartouTouch={TwoHandControls};
  if(typeof module!=="undefined"&&module.exports)module.exports={TwoHandControls};
})(typeof globalThis!=="undefined"?globalThis:this);
