(function(root){
  "use strict";
  const TAU=Math.PI*2;

  // PT-032. The guide's actual spatial reference is the SAME future
  // touchdown footprint already drawn by pieces() with 20% opacity.
  // Average the rendered centres of its minos (not their airborne centres).
  // Use Cartesian points, never a linear average of sectors, because
  // the seam between sectors 47 and 0 is continuous.
  function landingReference({cells,moonCenter,inner,stepR,sectors=48}={}){
    if(!Array.isArray(cells)||!cells.length||
       ![moonCenter?.x,moonCenter?.y,inner,stepR,sectors].every(Number.isFinite)||
       sectors<=0||stepR<=0||inner<=0)return null;
    let sx=0,sy=0,count=0,ringSum=0;
    for(const cell of cells){
      if(!Array.isArray(cell)||cell.length<2)continue;
      const [sector,ring]=cell;
      if(!Number.isFinite(sector)||!Number.isFinite(ring)||
         ring<0||ring>=10)continue;
      // Exactly matches visuals.js Artist.cell's annular cell midpoint.
      const angle=-Math.PI/2+(sector+.5)*TAU/sectors;
      const radius=inner+(ring+.5)*stepR;
      sx+=moonCenter.x+radius*Math.cos(angle);
      sy+=moonCenter.y+radius*Math.sin(angle);
      ringSum+=ring;
      count++;
    }
    if(count===0)return null;
    return {x:sx/count,y:sy/count,ring:ringSum/count,
      count,source:"landing-ghost"};
  }

  // Used for every input event and every display frame. Recompute after
  // rotations, shifts, board changes and falling instead of caching stale
  // airborne geometry or selecting by the projected footprint.
  function resolveLandingReference({game,piece,cellsOf,moonCenter,inner,stepR,sectors=48}={}){
    if(!piece||!game||typeof game.ghost!=="function"||
       typeof cellsOf!=="function")return null;
    const radius=game.ghost(piece);
    if(!Number.isInteger(radius))return null;
    const cells=cellsOf(piece,piece.angle,radius,piece.rot);
    const reference=landingReference({cells,moonCenter,inner,stepR,sectors});
    if(!reference||reference.count!==cells.length)return null;
    return {...reference,landingRadius:radius,angle:piece.angle};
  }

  root.PartouLandingGuide={landingReference,resolveLandingReference};
  if(typeof module!=="undefined"&&module.exports)
    module.exports={landingReference,resolveLandingReference};
})(typeof globalThis!=="undefined"?globalThis:this);
