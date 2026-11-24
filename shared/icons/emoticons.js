// Icons · Pixel smilies in the style of classic forum packs (15x15 grid, drawn by us, no third-party art).
// emo(type, size) returns an <svg> string. Types: grin cool sad wink wow think party love laugh sleepy angry nerd kiss meh smirk cowboy devil.
import { EMO_COL } from "./icon-colors.js";

const EMO_BASE=[
".....kkkkk.....","...kkyyyyykk...","..kywwyyyyyyk..",".kywyyyyyyyyyk.",".kyyyyyyyyyyyok",
"kyyyyyyyyyyyyok","kyyyyyyyyyyyyok","kyyyyyyyyyyyyok","kyyyyyyyyyyyyok","kyyyyyyyyyyyyok",
".kyyyyyyyyyyyok",".kyyyyyyyyyyok.","..kyyyyyyyyook.","...kkooooookk..",".....kkkkk....."];
const EYES2=[[4,5,"b"],[4,6,"b"],[9,5,"b"],[9,6,"b"]];
const SMILE=[[3,9,"b"],[11,9,"b"],[4,10,"b"],[10,10,"b"],[5,11,"b"],[6,11,"b"],[7,11,"b"],[8,11,"b"],[9,11,"b"]];
export const EMO_PIX={
 grin:[...EYES2,...[3,4,5,6,7,8,9,10,11].map(x=>[x,9,"b"]),[4,10,"b"],[5,10,"w"],[6,10,"w"],[7,10,"w"],[8,10,"w"],[9,10,"w"],[10,10,"b"],[5,11,"b"],[6,11,"r"],[7,11,"r"],[8,11,"r"],[9,11,"b"],[6,12,"b"],[7,12,"b"],[8,12,"b"]],
 cool:[...[2,3,4,5,6,7,8,9,10,11,12].map(x=>[x,5,"b"]),[3,6,"b"],[4,6,"b"],[5,6,"b"],[8,6,"b"],[9,6,"b"],[10,6,"b"],[4,7,"b"],[9,7,"b"],[3,6,"g"],[8,6,"g"],...SMILE],
 sad:[...EYES2,[3,4,"b"],[4,3,"b"],[10,3,"b"],[11,4,"b"],[5,9,"b"],[6,9,"b"],[7,9,"b"],[8,9,"b"],[9,9,"b"],[4,10,"b"],[10,10,"b"],[3,11,"b"],[11,11,"b"],[10,7,"c"],[10,8,"c"],[11,8,"c"]],
 wink:[[4,5,"b"],[4,6,"b"],[8,6,"b"],[9,6,"b"],[10,6,"b"],...SMILE,[8,12,"r"],[9,12,"r"]],
 wow:[[4,4,"b"],[4,5,"b"],[4,6,"b"],[9,4,"b"],[9,5,"b"],[9,6,"b"],[6,9,"b"],[7,9,"b"],[8,9,"b"],[5,10,"b"],[6,10,"r"],[7,10,"r"],[8,10,"r"],[9,10,"b"],[6,11,"b"],[7,11,"b"],[8,11,"b"]],
 think:[[5,4,"b"],[5,5,"b"],[10,4,"b"],[10,5,"b"],[4,10,"b"],[5,10,"b"],[6,10,"b"],[7,9,"b"],[8,9,"b"],[9,9,"b"],[10,9,"b"]],
 party:null
};
EMO_PIX.party=[...EMO_PIX.grin,[0,0,"p"],[1,1,"p"],[13,0,"g"],[14,1,"g"],[0,13,"c"],[14,13,"p"],[1,14,"g"]];
// More faces for avatars, drawn on the same 15x15 grid (our own pixels, no third-party art).
const OPEN_GRIN=EMO_PIX.grin.filter(([x,y])=>y>=9);
Object.assign(EMO_PIX,{
 love:[[3,4,"r"],[5,4,"r"],[3,5,"r"],[4,5,"r"],[5,5,"r"],[4,6,"r"],[8,4,"r"],[10,4,"r"],[8,5,"r"],[9,5,"r"],[10,5,"r"],[9,6,"r"],...SMILE],
 laugh:[[3,6,"b"],[4,5,"b"],[5,6,"b"],[8,6,"b"],[9,5,"b"],[10,6,"b"],...OPEN_GRIN,[2,7,"c"],[2,8,"c"],[12,7,"c"],[12,8,"c"]],
 sleepy:[[3,6,"b"],[4,6,"b"],[5,6,"b"],[8,6,"b"],[9,6,"b"],[10,6,"b"],[6,10,"b"],[7,10,"b"],[6,11,"b"],[7,11,"b"],[11,1,"c"],[12,1,"c"],[13,1,"c"],[12,2,"c"],[11,3,"c"],[12,3,"c"],[13,3,"c"]],
 angry:[...EYES2,[3,3,"b"],[4,4,"b"],[5,4,"b"],[10,3,"b"],[9,4,"b"],[8,4,"b"],[5,11,"b"],[6,10,"b"],[7,10,"b"],[8,10,"b"],[9,11,"b"],[2,8,"r"],[3,8,"r"],[11,8,"r"],[12,8,"r"]],
 nerd:[[2,4,"b"],[3,4,"b"],[4,4,"b"],[5,4,"b"],[6,4,"b"],[2,5,"b"],[6,5,"b"],[2,6,"b"],[6,6,"b"],[2,7,"b"],[3,7,"b"],[4,7,"b"],[5,7,"b"],[6,7,"b"],[7,5,"b"],
       [8,4,"b"],[9,4,"b"],[10,4,"b"],[11,4,"b"],[12,4,"b"],[8,5,"b"],[12,5,"b"],[8,6,"b"],[12,6,"b"],[8,7,"b"],[9,7,"b"],[10,7,"b"],[11,7,"b"],[12,7,"b"],[4,5,"w"],[4,6,"b"],[10,5,"w"],[10,6,"b"],
       [4,10,"b"],[5,10,"b"],[6,10,"b"],[7,10,"b"],[8,10,"b"],[9,10,"b"],[10,10,"b"],[6,11,"w"],[7,11,"w"],[8,11,"w"],[6,12,"b"],[7,12,"b"],[8,12,"b"]],
 kiss:[...EYES2,[7,9,"b"],[8,10,"b"],[7,11,"b"],[10,9,"r"],[12,9,"r"],[10,10,"r"],[11,10,"r"],[12,10,"r"],[11,11,"r"],[2,8,"p"],[3,8,"p"]],
 meh:[[3,6,"b"],[4,6,"b"],[5,6,"b"],[8,6,"b"],[9,6,"b"],[10,6,"b"],[3,5,"k"],[8,5,"k"],[5,10,"b"],[6,10,"b"],[7,10,"b"],[8,10,"b"],[9,10,"b"]],
 smirk:[...EYES2,[8,3,"b"],[9,3,"b"],[10,3,"b"],[5,10,"b"],[6,10,"b"],[7,10,"b"],[8,10,"b"],[9,9,"b"],[10,8,"b"]],
 cowboy:[...EYES2,...SMILE,...[4,5,6,7,8,9,10].map(x=>[x,0,"h"]),...[3,4,5,6,7,8,9,10,11].map(x=>[x,1,"h"]),[7,1,"o"],...[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14].map(x=>[x,2,"h"])]
});

// The devil (level challenge) is a purple face: its skin swaps the base colours.
const SKIN={devil:{y:"v",o:"d",w:"v",k:"b"}};
// Devil: horns, flames for eyes (yellow tip, orange heart), slanted brows and a wide toothy grin.
const FLAME=x=>[[x,2,"y"],[x,3,"y"],[x-1,4,"y"],[x,4,"o"],[x+1,4,"y"],[x-1,5,"o"],[x,5,"y"],[x+1,5,"o"],[x-1,6,"b"],[x,6,"o"],[x+1,6,"b"]];
EMO_PIX.devil=[[1,0,"b"],[2,0,"v"],[3,0,"b"],[1,1,"b"],[2,1,"v"],[3,1,"v"],[13,0,"b"],[12,0,"v"],[11,0,"b"],[13,1,"b"],[12,1,"v"],[11,1,"v"],[2,2,"b"],[12,2,"b"],
  ...FLAME(4),...FLAME(10),
  [2,8,"b"],[12,8,"b"],[3,9,"b"],[11,9,"b"],[4,9,"b"],[10,9,"b"],...[5,6,7,8,9].map(x=>[x,9,"w"]),[4,10,"b"],[10,10,"b"],...[5,6,7,8,9].map(x=>[x,10,"b"]),[5,11,"b"],[9,11,"b"],[6,11,"b"],[7,11,"b"],[8,11,"b"]];

export function emo(type, size=40){
  const skin=SKIN[type]||{}, grid=EMO_BASE.map(r=>r.split("").map(c=>skin[c]||c)); (EMO_PIX[type]||[]).forEach(([x,y,c])=>{ grid[y][x]=c; });
  let r=""; grid.forEach((row,y)=>row.forEach((c,x)=>{ if(c!==".") r+=`<rect x="${x}" y="${y}" width="1.02" height="1.02" fill="${EMO_COL[c]}"/>`; }));
  const px=Math.max(15, Math.round(size/15)*15);
  return `<svg class="emo emo-${type}" width="${px}" height="${px}" viewBox="0 0 15 15" shape-rendering="crispEdges" aria-hidden="true">${r}</svg>`;
}
