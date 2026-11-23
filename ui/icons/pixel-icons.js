// Icons · Pixel icons for list rows (12x12 grid, same style as the smilies).
// pic(name, size) returns an <svg> string. Names: pencil sun moon phone mail key door lock info flame trash speaker mic bulb
// briefcase plane heart mountain apple cup house bag cloud city family tree hand bed party tie bank laptop siren film
// book clock calendar chat link scales.
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
 trash:["....kkkk....","kkkkkkkkkkkk","krrrrrrrrrrk","kkkkkkkkkkkk",".kwrwrwrwrk.",".kwrwrwrwrk.",".kwrwrwrwrk.",".kwrwrwrwrk.",".kwrwrwrwrk.",".kwrwrwrwrk.",".kwwwwwwwwk.","..kkkkkkkk.."],
 speaker:["......k.....",".....kk.....","....kwk..k..","kkkkwwk...k.","kwwwwwk.k.k.","kwwwwwk.k.k.","kwwwwwk.k.k.","kkkkwwk...k.","....kwk..k..",".....kk.....","......k.....","............"],
 mic:["....kkkk....","...kssssk...","...kswssk...","...kswssk...","...kssssk...",".k.kssssk.k.",".k..kkkk..k.","..k......k..","...kkkkkk...",".....kk.....","....kkkk....","............"],
 bulb:["....kkkk....","...kyyyyk...","..kyywyyyk..","..kywyyyyk..","..kyyyyyyk..","..kyyyyyok..","...kyyyok...","....kyok....","....kssk....","....kssk....",".....kk.....","............"],
 briefcase:["............","....kkkk....","...k....k...","kkkkkkkkkkkk","knwnnnnnnnnk","knnnnnnnnnnk","kkkkkyykkkkk","knnnnyynnnnk","knnnnnnnnnnk","kmmmmmmmmmmk","kkkkkkkkkkkk","............"],
 plane:[".....kk.....","....kwck....","....kcck....","....kcck....","..kkkcckkk..",".kcccccccck.","kcccccccccck","kkkkkcckkkkk","....kcck....","...kkcckk...","..kcccccck..","..kkkkkkkk.."],
 heart:["............",".kkkk..kkkk.","krrrrkkrrrrk","krwwrrrrrrrk","krwrrrrrrrrk","krrrrrrrrrrk",".krrrrrrrrk.","..krrrrrrk..","...krrrrk...","....krrk....",".....kk.....","............"],
 mountain:["......krr...","......krrr..","......k.....",".....kwk....",".....kwk....","....kwwwk...","...kwswswk..","..ksssssslk.",".ksssssssllk","kssssssssllk","kkkkkkkkkkkk","............"],
 apple:[".......kkk..","......keeek.",".....kmkkk..","..kkkkmkkk..",".krrrrkrrrk.","krwrrrrrrrrk","krwrrrrrrrrk","krrrrrrrrrrk","krrrrrrrrrrk",".krrrrrrrrk.","..krrkkrrk..","...kk..kk..."],
 cup:["....s..s....","...s..s.....","....s..s....","..kkkkkkkk..","..kmmmmmmk..","..kwwwwwwkkk","..kwwwwwwk.k","..kwwwwwwk.k","..kwwwwwwkk.","..kllllllk..",".kkkkkkkkkk.","............"],
 house:[".....kk.....","....krrk....","...krwrrk...","..krrrrrrk..",".krrrrrrrrk.","kkkkkkkkkkkk",".knnnnnnnnk.",".knccnnmmnk.",".knccnnmmnk.",".knnnnnmynk.",".knnnnnmmnk.",".kkkkkkkkkk."],
 bag:["............","....kkkk....","...k....k...","...k....k...",".kkkkkkkkkk.",".kokooookok.",".kwoooooook.",".kooooooook.",".kooooooook.",".kooooooook.",".kooooooook.",".kkkkkkkkkk."],
 cloud:["............","............","....kkkk....","...kwwwwk...",".kkwwwwwwkk.","kwwwwwwwwwwk","kwwwwwwwwwwk","kwwwwwwwwwlk","kllllllllllk",".kkkkkkkkkk.","...c...c....","..c...c...c."],
 city:[".kkkkk......",".ksssk......",".kysyk......",".ksssk......",".kysykkkkkkk",".ksssklllllk",".kysyklylylk",".ksssklllllk",".kysyklylylk",".ksssklllllk",".kssskllmllk","kkkkkkkkkkkk"],
 family:["..kkkk......",".knnnnk.....",".knnnnk.....",".knnnnk.....","..kkkk......",".kcccck.....","kcwcccck.kk.","kcccccckknnk","kcccccckknnk","kcccccckrrrk","kcccccckrrrk","kkkkkkkkkkkk"],
 tree:["....kkkk....","..kkeeeekk..",".keeweeeeek.","keeweeeeeeek","keeeeeeeeeek","keeeeeeeeeek",".keeeeeeeek.","..kkkmmkkk..","....kmmk....","....kmmk....","....kmmk....","..kkkkkkkk.."],
 hand:["...k.k.k.k..","..knknknknk.","..knknknknk.","k.knknknknk.","knknnnnnnnk.","knnnnnnnnnk.",".knnnnnnnnk.","..knnnnnnk..","...knnnnk...","...kcccck...","...kcccck...","...kkkkkk..."],
 bed:["............","............","kkk.........","kmk.........","kmk.........","kmkkkk......","kmkwwkkkkkkk","kmkwwkccccck","kmkwwkccccck","kmmmmmmmmmmk","kkkkkkkkkkkk","kk........kk"],
 party:["............","kkkkkkkkkkkk",".kwcccccrck.","..kcccccck..","...kcccck...","....kcck....",".....kk.....",".....kk.....",".....kk.....",".....kk.....","...kkkkkk...","............"],
 tie:[".kkkkkkkkkk.",".kwwkkkkwwk.","..kwkrrkwk..","...kkrrkk...","....krrk....","...krwrrk...","...krrrrk...","..krrrrrrk..","..krrrrrrk..","...krrrrk...","....krrk....",".....kk....."],
 bank:[".....k......","....klk.....","...klllk....","..klllllk...",".klllllllk..","kkkkkkkkkkk.",".kwkwkwkwk..",".kwkwkwkwk..",".kwkwkwkwk..",".kwkwkwkwk..","klllllllllk.","kkkkkkkkkkk."],
 laptop:["............","............",".kkkkkkkkkk.",".kcccccwcck.",".kccccwccck.",".kcccccccck.",".kcccccccck.",".kkkkkkkkkk.","kllllllllllk","kssssssssssk","kkkkkkkkkkkk","............"],
 siren:[".y...yy...y.","..y......y..","....kkkk....","...krwrrk...","yy.krwrrk.yy","..krwrrrrk..","..krrrrrrk..","..krrrrrrk..",".kkkkkkkkkk.",".kssssssssk.",".kkkkkkkkkk.","............"],
 film:["............","kkkkkkkkkkkk","kwwbbwwbbwwk","kbwwbbwwbbwk","kkkkkkkkkkkk","kssssssssssk","kswwwwwwwssk","kssssssssssk","kswwwwwssssk","kssssssssssk","kkkkkkkkkkkk","............"],
 book:["............","............",".kkkk..kkkk.","kwwwwkkwwwwk","kwsswkkwsswk","kwwwwkkwwwwk","kwsswkkwsswk","kwwwwkkwwwwk","kwsswkkwsswk","kwwwwkkwwwwk","kcccckkcccck",".kkkkkkkkkk."],
 clock:["...kkkkkk...",".kkwwswwwkk.",".kwwwwkwwwk.","kwwwwwkwwwwk","kwwwwwkwwwwk","kswwwwkwwwsk","kwwwwwkkkwwk","kwwwwwwwwwwk","kwwwwwwwwwwk",".kwwwwswwwk.",".kkwwwwwwkk.","...kkkkkk..."],
 calendar:["...k....k...",".kkskkkkskk.",".krrrrrrrrk.",".krrrrrrrrk.",".kkkkkkkkkk.",".kwwwwwwwwk.",".kwswswswwk.",".kwwwwwwwwk.",".kwswswrwwk.",".kwwwwwwwwk.",".kkkkkkkkkk.","............"],
 chat:["............","..kkkkkkkk..",".kwwwwwwwwk.","kwwwwwwwwwwk","kwwwwwwwwwwk","kwkkwkkwkkwk","kwkkwkkwkkwk","kwwwwwwwwwwk",".kwwwwwwwwk.","..kwkkkkkk..",".kwk........","kk.........."],
 link:["............",".kkkkkk.....","kwsssssk....","kskkkkskkkk.","ksk.kksksssk","ksk.kkskkksk","kskkkssk.ksk","kssskskk.ksk",".kkkkskkkksk","....kssssssk",".....kkkkkk.","............"],
 scales:[".....kk.....",".kkkkkkkkkk.",".kwyyyyyyyk.",".kkkkkkkkkk.",".k...kk...k.","k.k..kk..k.k","kkkk.kk.kkkk","kyyk.kk.kyyk",".kk..kk..kk.","...kkkkkk...","..kyyyyyyk..","..kkkkkkkk.."],
};
export function pic(name, size=20){ let r=""; PIC[name].forEach((row,y)=>row.split("").forEach((c,x)=>{ if(c!==".") r+=`<rect x="${x}" y="${y}" width="1.02" height="1.02" fill="${PIC_COL[c]}"/>`; }));  return `<svg class="pic" width="${size}" height="${size}" viewBox="0 0 12 12" shape-rendering="crispEdges" aria-hidden="true">${r}</svg>`; }
