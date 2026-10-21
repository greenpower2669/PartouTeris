(function (root) {
  "use strict";
  const SECTORS = 48, RINGS = 10, LANES = 4, SPACE_STEPS = 4, MILESTONE_STEP = 1000, PLACEMENT_POINTS = 40;
  const FORMS = [
    [[-1,0],[0,0],[1,0],[2,0]],
    [[0,0],[1,0],[0,1],[1,1]],
    [[-1,0],[0,0],[1,0],[1,1]],
    [[-1,1],[-1,0],[0,0],[1,0]],
    [[-1,0],[0,0],[0,1],[1,1]],
    [[-1,1],[0,1],[0,0],[1,0]],
    [[-1,0],[0,0],[1,0],[0,1]]
  ];
  const COLORS = ["#67dcf1","#ffd567","#bca5ff","#ff9077"];
  const mod = (n, m) => ((n % m) + m) % m;
  function cellsOf(p, a=p.angle, r=p.radius, rot=p.rot) {
    const offsets = FORMS[p.type];
    return offsets.map(([x,y]) => {
      if (p.type !== 1) for (let k=0;k<rot;k++) [x,y] = [-y,x];
      return [mod(a+x, SECTORS), r+y];
    });
  }
  class Game {
    constructor(rng=Math.random) { this.rng=rng; this.reset(); }
    reset() {
      this.baseFallSeconds=this.baseFallSeconds||5.0;
      this.events=[];
      this.board = Array.from({length:RINGS},()=>Array(SECTORS).fill(-1));
      this.score=0; this.cleared=0; this.level=1; this.seconds=0; this.placements=0;
      this.combo=0; this.flash=0; this.over=false; this.paused=false;
      this.pieces=Array(LANES).fill(null);
      this.fall=Array(LANES).fill(0);
      for(let i=0;i<LANES;i++) this.spawn(i);
    }
    setBaseFallSeconds(value) {
      if(!Number.isFinite(Number(value)))return this.baseFallSeconds;
      this.baseFallSeconds=Math.min(8,Math.max(2,Number(value)));
      return this.baseFallSeconds;
    }
    fallInterval() {
      return Math.max(.8,this.baseFallSeconds*Math.pow(.92,this.level-1));
    }
    drainEvents(){return this.events.splice(0);}
    award(points,reason,details={}) {
      if(!Number.isSafeInteger(points)||points<=0) return 0;
      const before=this.score;
      this.score+=points;
      this.events.push({type:'points',reason,gained:points,total:this.score,...details});
      const first=Math.floor(before/MILESTONE_STEP)+1;
      const last=Math.floor(this.score/MILESTONE_STEP);
      if(last>=first) {
        this.events.push({type:'milestone',reached:first*MILESTONE_STEP,upto:last*MILESTONE_STEP,total:this.score});
      }
      return points;
    }
    spawn(lane) {
      const type=Math.max(0,Math.min(FORMS.length-1,Math.floor(this.rng()*FORMS.length)));
      this.pieces[lane]={lane,type,angle:12*lane,radius:RINGS+SPACE_STEPS,rot:0,boost:false};
      this.fall[lane]=0;
    }
    canPlace(p,angle=p.angle,radius=p.radius,rot=p.rot) {
      const cells=cellsOf(p,angle,radius,rot);
      for(const [a,r] of cells){
        if(r<0) return false;
        if(r>=RINGS) continue;
        if(this.board[r][a]!==-1) return false;
      }
      return true;
    }
    shift(lane,delta) {
      const p=this.pieces[lane];
      if(this.over||this.paused||!p) return false;
      const a=mod(p.angle+Math.sign(delta),SECTORS);
      if(!delta||!this.canPlace(p,a,p.radius,p.rot)) return false;
      p.angle=a; return true;
    }
    rotate(lane) {
      const p=this.pieces[lane];
      if(this.over||this.paused||!p) return false;
      if(p.type===1) return true;
      const rot=mod(p.rot+1,4);
      for(const kick of [0,-1,1,-2,2]) {
        if(this.canPlace(p,mod(p.angle+kick,SECTORS),p.radius,rot)) {
          p.angle=mod(p.angle+kick,SECTORS); p.rot=rot; this.events.push({type:'rotate',lane}); return true;
        }
      }
      return false;
    }
    // A laser fired at the middle turns a piece, while a side hit also
    // nudges it tangentially AWAY from the impact. Solid blocks still win.
    laser(lane,impactSector) {
      const p=this.pieces[lane];
      if(this.over||this.paused||!p||!Number.isFinite(impactSector))return null;
      const rel=mod(impactSector-p.angle+SECTORS/2,SECTORS)-SECTORS/2;
      const nudge=Math.abs(rel)>.75?-Math.sign(rel):0;
      const moved=nudge?this.shift(lane,nudge):false;
      const rotated=this.rotate(lane);
      if(!rotated&&!moved)return null;
      const data={type:'laser',lane,angle:p.angle,radius:p.radius,moved,rotated,impactSector};
      this.events.push(data);
      return data;
    }
    boost(lane,value) {
      if(this.pieces[lane]) this.pieces[lane].boost=!!value;
    }
    ghost(p) {
      let radius=p.radius;
      while(this.canPlace(p,p.angle,radius-1,p.rot)) radius--;
      return radius;
    }
    // During descent, airborne pieces are non-solid. At touchdown they are
    // resolved in lane order, against committed material ONLY. If a piece is
    // now embedded in a block placed in the same frame, lift it outward to
    // the nearest legal supported resting layer; never overwrite board cells.
    landingRadius(p) {
      const legal = radius => {
        const cells=cellsOf(p,p.angle,radius,p.rot);
        return cells.every(([a,r])=>r>=0 && r<RINGS && this.board[r][a]===-1);
      };
      // Start at the present altitude. Going outward avoids teleportation
      // through the Moon and is needed only for simultaneous arrivals.
      for(let radius=p.radius;radius<=RINGS+2;radius++){
        if(legal(radius))return radius;
      }
      return null; // material has reached the orbital limit
    }
    // Neighbours mean distinct already-settled cells, not cells of the
    // new tetromino itself. Polar adjacency wraps across sector 47 → 0.
    placementReward(blocks) {
      const current=new Set(blocks.map(([a,r])=>r+":"+a));
      const neighbourCells=new Set();
      let radialSum=0;
      for(const [a,r] of blocks) {
        radialSum+=r;
        for(const [na,nr] of [[mod(a-1,SECTORS),r],[mod(a+1,SECTORS),r],[a,r-1],[a,r+1]]) {
          if(nr<0||nr>=RINGS)continue; // The Moon is ground, not another block.
          const key=nr+":"+na;
          if(!current.has(key)&&this.board[nr][na]!==-1)neighbourCells.add(key);
        }
      }
      const contacts=neighbourCells.size;
      const meanRadius=radialSum/blocks.length;
      const centerBonus=Math.max(0,Math.round((RINGS-1-meanRadius)*12));
      const base=PLACEMENT_POINTS+centerBonus;
      const multiplier=Math.max(1,contacts);
      return {points:base*multiplier,base,centerBonus,contacts,multiplier};
    }
    lock(lane) {
      const p=this.pieces[lane];
      if(!p || this.over) return false;
      const radius=this.landingRadius(p);
      if(radius===null){
        this.over=true;this.events.push({type:'gameover',lane});return false;
      }
      const blocks=cellsOf(p,p.angle,radius,p.rot);
      const reward=this.placementReward(blocks); // BEFORE committing this piece
      for(const [a,r] of blocks) this.board[r][a]=lane;
      this.placements++;
      this.events.push({type:'lock',lane,angle:p.angle,radius});
      this.award(reward.points,'placement',{lane,angle:p.angle,radius,...reward});
      this.pieces[lane]=null;
      this.spawn(lane);
      return true;
    }
    clearRings() {
      let n=0;
      for(let r=0;r<RINGS;r++) {
        if(this.board[r].every(x=>x>=0)){
          this.board.splice(r,1);
          this.board.push(Array(SECTORS).fill(-1));
          n++; r--;
        }
      }
      if(n){
        this.combo++;
        this.cleared+=n;
        const gained=480*n*n*this.level + 100*Math.max(0,this.combo-1);
        this.flash=1; this.events.push({type:'ring',count:n,gained,combo:this.combo});
        this.award(gained,'ring',{count:n,combo:this.combo});
      }else this.combo=0;
      return n;
    }
    step(dtSeconds) {
      if(this.over||this.paused) return;
      const dt=Math.min(Math.max(dtSeconds,0),0.12);
      this.seconds+=dt;
      this.level=1+Math.floor(this.cleared/3)+Math.floor(this.seconds/150);
      const interval=this.fallInterval();
      let didLock=false;
      for(let lane=0;lane<LANES;lane++) {
        let p=this.pieces[lane];
        this.fall[lane]+=dt*(p&&p.boost?5:1);
        // Space arrival is clearly visible, without slowing the entire session too much.
        const laneInterval=p.radius>=RINGS?interval*.72:interval;
        if(this.fall[lane]>=laneInterval) {
          this.fall[lane]-=laneInterval;
          if(this.canPlace(p,p.angle,p.radius-1,p.rot)) p.radius--;
          else { didLock=this.lock(lane)||didLock; }
          if(this.over) break;
        }
      }
      if(didLock&&!this.over) this.clearRings();
      this.flash=Math.max(0,this.flash-dt*1.2);
    }
  }
  const api={Game,SECTORS,RINGS,LANES,SPACE_STEPS,MILESTONE_STEP,PLACEMENT_POINTS,FORMS,COLORS,cellsOf,mod};
  root.PartouEngine=api;
  if(typeof module!=="undefined"&&module.exports) module.exports=api;
})(typeof globalThis!=="undefined"?globalThis:this);
