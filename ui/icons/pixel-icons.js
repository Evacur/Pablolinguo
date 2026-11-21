// Icons · Pixel icons for list rows (12x12 grid, same style as the smilies).
// pic(name, size) returns an <svg> string. Names: pencil sun moon phone mail key door lock info flame speaker mic bulb star trash.
import { PIC_COL } from "../tokens/icon-colors.js";

export const PIC={
 pencil:["........kkk.",".......krrrk","......kwkrrk",".....kyykkk.","....kyyyk...","...kyyyk....","..kyyyk.....",".knyyk......",".knnk.......","kbnk........","kkk.........","............"],
 sun:[".....oo.....",".o........o.","..o.kkkk.o..","...kyyyyk...","..kyywyyyk..","o.kywyyyyk.o","o.kyyyyyyk.o","..kyyyyyok..","...kyyook...","..o.kkkk.o..",".o........o.",".....oo....."],
 moon:["....kkkk....","..kkyyyk....",".kyywk......",".kywk.......","kyyk........","kyyk.......k","kyyk......ky","kyyyk....kyk",".kyyykkkkyyk",".kyyyyyyyyk.","..kkoooookk.","....kkkk...."],
 phone:["...kkkkkk...","..kssssssk..","..kccwwcck..","..kccwwcck..","..kccwwcck..","..kwwwwwwk..","..kcwwwwck..","..kccwwcck..","..kssssssk..","..ksskkssk..","..kssssssk..","...kkkkkk..."],
 mail:["............","............","kkkkkkkkkkkk","kkwwwwwwwwkk","kwkwwwwwwkwk","kwwkwwwwkwwk","kwwwkrrkwwwk","kwwwwkkwwwwk","kwwwwwwwwwwk","kllllllllllk","kkkkkkkkkkkk","............"],
 key:["............","............",".kkkk.......","kyyyyk......","kywwykkkkkkk","kywwyyyyyyyk","kyyyykkkykyk",".kkkk...kkk.","............","............","............","............"],
 door:["kkkkkkk.....","knnnnnk.....","knmmmnk.k...","knmnmnk.kk..","knmmmnkkkek.","knnnynkeeeek","knnnynkkkek.","knnnnnk.kk..","knmmmnk.k...","knmnmnk.....","knnnnnk.....","kkkkkkk....."],
 lock:["....kkkk....","...kk..kk...","...k....k...","...k....k...",".kkkkkkkkkk.",".kyyyyyyyyk.",".kyyykkyyyk.",".kyyykkyyyk.",".kyyyykyyyk.",".kyyyyyyyok.",".kooooooook.",".kkkkkkkkkk."],
 info:["...kkkkkk...","..kcccccck..",".kccccwwcck.","kcccccwwccck","kcccccccccck","kccccwwwccck","kcccccwwccck","kcccccwwccck","kcccccwwccck",".kcccwwwwck.","..kcccccck..","...kkkkkk..."],
 flame:[".....k......","....kok.....","....kook....","...koyok....","..koyyok.k..","..koyyyokok.",".koyywyyook.",".koyywwyyok.",".koyywwyyok.","..koyyyyok..","...kooook...","....kkkk...."],
 speaker:["......k.....",".....kk...c.","....kyk.c..c","kkkkyyk..c.c","kwyyyyk..c.c","kyyyyyk..c.c","kyyyyyk..c.c","kooooyk..c.c","kkkkyyk..c.c","....kok.c..c",".....kk...c.","......k....."],
 mic:["....kkkk....","...kssssk...","...kswssk...","...kswssk...","...kssssk...",".k.kssssk.k.",".k.kssssk.k.",".kk.kkkk.kk.","..kk....kk..","....kkkk....",".....kk.....","...kkkkkk..."],
 bulb:["....kkkk....","..kkyyyykk..",".kyywwyyyyk.",".kywyyyyyyk.","kyywyyyyyyok","kyyyyyyyyyok",".kyyyyyyyok.","..kyyyyyok..","...kkkkkk...","...kssssk...","...kkkkkk...","....kssk...."],
 star:[".....kk.....","....kyyk....","....kyyk....","kkkkywyykkkk","kyyywyyyyyyk",".kyyyyyyyyk.","..kyyyyyyk..","..kyyyyyyk..",".kyyyookyyk.",".kyyok.koyk.","kyok....koyk","kkk......kkk"],
 trash:["....kkkk....","kkkkkkkkkkkk","krrrrrrrrrrk","kkkkkkkkkkkk",".kwrwrwrwrk.",".kwrwrwrwrk.",".kwrwrwrwrk.",".kwrwrwrwrk.",".kwrwrwrwrk.",".kwrwrwrwrk.",".kwwwwwwwwk.","..kkkkkkkk.."],
};
export function pic(name, size=20){ let r=""; PIC[name].forEach((row,y)=>row.split("").forEach((c,x)=>{ if(c!==".") r+=`<rect x="${x}" y="${y}" width="1.02" height="1.02" fill="${PIC_COL[c]}"/>`; }));  return `<svg class="pic" width="${size}" height="${size}" viewBox="0 0 12 12" shape-rendering="crispEdges" aria-hidden="true">${r}</svg>`; }
