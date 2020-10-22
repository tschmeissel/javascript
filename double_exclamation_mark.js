// 22.20.2020 Get the truthy value from an object with a double bang
// !undefined
// true
// !!undefined
// false
//
// https://www.youtube.com/watch?v=vsYc4K23FAM

// 13.11.2019 Vorsicht bei Strings, z.B. "false"
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