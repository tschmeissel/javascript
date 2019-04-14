// 13.11. Vorsicht bei Strings, z.B. "false"
// hier bekommt man den boolean nur durch Vergleich oder
// das Parsen mit Drittbibliotheken raus

// Zwingt ein Objekt nach boolean
// !! ist kurz für Boolean(x)
var oObject;
console.log("var object");
console.log("oObject: " + oObject);
console.log("!oObject: " + !oObject);
console.log("!!oObject: " + !!oObject);
console.log("--snip--");
var oObject = 0;
console.log("var object = 0");
console.log("oObject: " + oObject);
console.log("!oObject: " + !oObject);
console.log("!!oObject: " + !!oObject);
console.log("--snip--");
var oObject = "";
console.log("var object = ''");
console.log("oObject: " + oObject);
console.log("!oObject: " + !oObject);
console.log("!!oObject: " + !!oObject);
console.log("--snip--");
var oObject = {};
console.log("var object = {}");
console.log("oObject: " + oObject);
console.log("!oObject: " + !oObject);
console.log("!!oObject: " + !!oObject);
console.log("--snip--");
var oObject = null;
console.log("var object = null");
console.log("oObject: " + oObject);
console.log("!oObject: " + !oObject);
console.log("!!oObject: " + !!oObject);