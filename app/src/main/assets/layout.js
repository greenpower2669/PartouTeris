(function(root){
  "use strict";
  function computePortraitLayout({width,height,headerBottom,controlsTop}) {
    const W=Math.max(1,Number(width)||1),H=Math.max(1,Number(height)||1);
    const top=Math.max(8,Math.min(H-20,Number(headerBottom)||0)+17);
    const lower=Math.max(top+30,Math.min(H-5,Number(controlsTop)||H)-12);
    const span=lower-top;
    const outer=Math.max(1,Math.min(W*.442,span*.435));
    const scale=outer/.98;
    const inner=scale*.34;
    return {cx:W*.5,cy:(top+lower)*.5,scale,outer,inner,stepR:(outer-inner)/10,top,lower};
  }
  root.PartouLayout={computePortraitLayout};
  if(typeof module!=="undefined"&&module.exports)module.exports={computePortraitLayout};
})(typeof globalThis!=="undefined"?globalThis:this);
