// Encouragement toasts after 3 and 6 right answers in a row, and when the streak breaks.
let combo=0;
export function cheer(ok){
  if(ok){ combo++; if(combo===3) toast("cool","3 d'affilée !","Tu es chaud aujourd'hui."); else if(combo===6) toast("party","6 d'affilée !!","Incroyable, continue."); }
  else { if(combo>=3) toast("wow","Oups, la série s'arrête","Ce n'est pas grave, lis la règle."); combo=0; }
}

