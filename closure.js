// https://medium.freecodecamp.org/javascript-closures-simplified-d0d23fa06ba4
function outer() {

   var b = 10;
   function inner() {
        
         var a = 20; 
         console.log(a+b);
    }
   return inner;
}

var X = outer(); //outer() invoked the first time
var Y = outer();

console.log(typeof(X)); //X is of type function
console.log(typeof(Y)); //Y is of type function

X(); // X() invoked the first time
X(); // X() invoked the second time
X(); // X() invoked the third time

Y(); // Y() invoked the first time

console.dir(X); //use console.dir() instead of console.log()