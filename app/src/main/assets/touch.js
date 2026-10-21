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
      this.boostActive=false;
      this.holdDuration=420; // long press requires a clear delay after quick tap
      this.longTapTravel=26;
      this.taps=new Map();
      this.tapDistance=26;  // tolerance in CSS pixels
      this.tapDuration=360; // long touches never rotate
    }
    isGripping(){return this.grip!==null;}
    down(p) {
      if(this.grip && this.grip.id===p.id)return false;
      if(!this.grip){
        const lane=this.chooseLane(p.angle);
        this.grip={id:p.id,lane,lastAngle:p.angle,accumulator:0,startDistance:p.distance,inward:false};
        this.onSelect(lane);
        return true;
      }
      if(this.taps.has(p.id))return false;
      this.taps.set(p.id,{x:p.x,y:p.y,time:p.time,moved:false,long:false});
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
        g.inward=p.distance<g.startDistance-17;
        this.updateBoost();
        return true;
      }
      const t=this.taps.get(p.id);
      if(!t)return false;
      if(Math.hypot(p.x-t.x,p.y-t.y)>this.longTapTravel)t.moved=true;
      return true;
    }
    updateBoost(force=false) {
      const active=!!(this.grip&&(this.grip.inward||[...this.taps.values()].some(t=>t.long)));
      if(this.grip&&(force||active!==this.boostActive)){
        this.boostActive=active;
        this.onBoost(this.grip.lane,active);
      }
    }
    tick(time) {
      if(!this.grip)return;
      let changed=false;
      for(const tap of this.taps.values()) {
        if(!tap.moved&&!tap.long&&time-tap.time>=this.holdDuration) {
          tap.long=true;changed=true;
        }
      }
      if(changed)this.updateBoost();
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
      const stable=!t.moved&&Math.hypot(p.x-t.x,p.y-t.y)<=this.tapDistance;
      // Release a held fast fall immediately, without rotating the piece.
      const wasLong=t.long||p.time-t.time>=this.holdDuration;
      this.updateBoost();
      if(this.grip&&!wasLong&&shortTap&&stable){
        this.onRotate(this.grip.lane);
        return "rotate";
      }
      return "ignored";
    }
    cancel(p) {
      if(this.grip&&this.grip.id===p.id){
        this.reset();
      } else {
        this.taps.delete(p.id);
        this.updateBoost();
      }
    }
    reset() {
      if(this.grip)this.onBoost(this.grip.lane,false);
      this.boostActive=false;
      this.grip=null;
      this.taps.clear();
    }
  }
  root.PartouTouch={TwoHandControls};
  if(typeof module!=="undefined"&&module.exports)module.exports={TwoHandControls};
})(typeof globalThis!=="undefined"?globalThis:this);
