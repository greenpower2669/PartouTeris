(function(root){
  "use strict";
  const TAU=Math.PI*2;

  // PT-029: a scaled, perceptual guide; NOT a second physics orbit.
  // The gripped finger lies on the rim of a tiny virtual Moon.
  // Its centre is *behind* that finger along the selected piece's radial.
  // Consequently the circle's local tangent is exactly the tangent used
  // by tangent-control.js on every one of the 48 lunar sectors.
  function ghostMoonGeometry({x,y,angle,sectors=48,radius=58}={}){
    if(![x,y,angle].every(Number.isFinite)||
       !Number.isFinite(sectors)||sectors<=0||
       !Number.isFinite(radius)||radius<=0)return null;
    const theta=-Math.PI/2+(angle/sectors)*TAU;
    const radial={x:Math.cos(theta),y:Math.sin(theta)};
    const tangent={x:-radial.y,y:radial.x};
    return {
      center:{x:x-radius*radial.x,y:y-radius*radial.y},
      contact:{x,y},radial,tangent,radius,theta
    };
  }

  function drawGhostMoon(ctx,options){
    const g=ghostMoonGeometry(options);
    if(!ctx||!g)return false;
    const {center:c,radius:r,theta}=g;
    ctx.save();
    // Extremely low-opacity lunar disc. Blocks, falling pieces and target
    // remain visible through it. The ghost is drawn BEHIND game pieces.
    ctx.beginPath();
    ctx.arc(c.x,c.y,r,0,TAU);
    ctx.fillStyle="rgba(116,186,225,0.032)";
    ctx.fill();
    ctx.lineWidth=1.3;
    ctx.strokeStyle="rgba(135,235,253,0.15)";
    ctx.stroke();

    // Sparse, ghostly lunar craters: subtle depth without a solid image.
    ctx.strokeStyle="rgba(169,215,236,0.095)";
    ctx.lineWidth=1;
    for(const [dx,dy,scale] of [[-.32,-.19,.15],[.23,.28,.11],[.34,-.28,.085]]){
      ctx.beginPath();
      ctx.arc(c.x+dx*r,c.y+dy*r,r*scale,0,TAU);
      ctx.stroke();
    }

    // Highlight the rim around the held finger, showing the 360° turn
    // and the direction along which the tangent smoothly evolves.
    ctx.beginPath();
    ctx.arc(c.x,c.y,r,theta-.42,theta+.42);
    ctx.strokeStyle="rgba(122,244,255,0.27)";
    ctx.lineWidth=2.4;
    ctx.shadowColor="rgba(72,215,244,0.34)";
    ctx.shadowBlur=6;
    ctx.stroke();

    // A tiny center pin makes the pivot legible, never opaque.
    ctx.shadowBlur=0;
    ctx.beginPath();
    ctx.arc(c.x,c.y,2.7,0,TAU);
    ctx.fillStyle="rgba(177,242,255,0.23)";
    ctx.fill();
    ctx.restore();
    return true;
  }

  root.PartouGhostMoon={ghostMoonGeometry,drawGhostMoon};
  if(typeof module!=="undefined"&&module.exports)
    module.exports={ghostMoonGeometry,drawGhostMoon};
})(typeof globalThis!=="undefined"?globalThis:this);
