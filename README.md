Sandkasten
 https://stackblitz.com/edit/typescript-b8govq?file=index.ts

Was ist der Unterschied zwischen ?? und ||
 https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#nullish-coalescing
 || behandelt alles was falsy und schaltet um auf den alternativen Wert
 ?? tut das nicht für 0, NaN, ""
 dadurch lassen sich bugs wie dieser vermeiden
  let volume = localStorage.volume || 0.5; // würde bei 0 auf 0.5 springen
