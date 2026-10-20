(function (root) {
  "use strict";
  const SECTORS = 48, RINGS = 10, LANES = 4;
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
      this.board = Array.from({length:RINGS},()=>Array(SECTORS).fill(-1));
      this.score=0; this.cleared=0; this.level=1; this.seconds=0;
      this.combo=0; this.flash=0; this.over=false; this.paused=false;
      this.pieces=Array(LANES).fill(null);
      this.fall=Array(LANES).fill(0);
      for(let i=0;i<LANES;i++) this.spawn(i);
    }
    spawn(lane) {
      const type=Math.max(0,Math.min(FORMS.length-1,Math.floor(this.rng()*FORMS.length)));
      this.pieces[lane]={lane,type,angle:12*lane,radius:RINGS+1,rot:0,boost:false};
      this.fall[lane]=0;
    }
    canPlace(p,angle=p.angle,radius=p.radius,rot=p.rot) {
      const cells=cellsOf(p,angle,radius,rot);
      for(const [a,r] of cells){
        if(r<0) return false;
        if(r>=RINGS) continue;
        if(this.board[r][a]!==-1) return false;
        for(const other of this.pieces) {
          if(!other || other===p) continue;
          if(cellsOf(other).some(([oa,orad])=>oa===a&&orad===r)) return false;
        }
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
          p.angle=mod(p.angle+kick,SECTORS); p.rot=rot; return true;
        }
      }
      return false;
    }
    boost(lane,value) {
      if(this.pieces[lane]) this.pieces[lane].boost=!!value;
    }
    ghost(p) {
      let radius=p.radius;
      while(this.canPlace(p,p.angle,radius-1,p.rot)) radius--;
      return radius;
    }
    lock(lane) {
      const p=this.pieces[lane];
      if(!p) return;
      const blocks=cellsOf(p);
      if(blocks.some(([,r])=>r>=RINGS||r<0)) { this.over=true; return; }
      for(const [a,r] of blocks) this.board[r][a]=lane;
      this.pieces[lane]=null;
      this.spawn(lane);
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
        this.score += 480*n*n*this.level + 100*Math.max(0,this.combo-1);
        this.flash=1;
      }else this.combo=0;
      return n;
    }
    step(dtSeconds) {
      if(this.over||this.paused) return;
      const dt=Math.min(Math.max(dtSeconds,0),0.12);
      this.seconds+=dt;
      this.level=1+Math.floor(this.cleared/3)+Math.floor(this.seconds/75);
      const interval=Math.max(0.13,0.82*Math.pow(0.9,this.level-1));
      let didLock=false;
      for(let lane=0;lane<LANES;lane++) {
        let p=this.pieces[lane];
        this.fall[lane]+=dt*(p&&p.boost?5:1);
        if(this.fall[lane]>=interval) {
          this.fall[lane]-=interval;
          if(this.canPlace(p,p.angle,p.radius-1,p.rot)) p.radius--;
          else { this.lock(lane); didLock=true; }
          if(this.over) break;
        }
      }
      if(didLock&&!this.over) this.clearRings();
      this.flash=Math.max(0,this.flash-dt*1.2);
    }
  }
  const api={Game,SECTORS,RINGS,LANES,FORMS,COLORS,cellsOf,mod};
  root.PartouEngine=api;
  if(typeof module!=="undefined"&&module.exports) module.exports=api;
})(typeof globalThis!=="undefined"?globalThis:this);
