// https://developer.mozilla.org/de/docs/Web/JavaScript/Closures
// Lesezeichen: Closure Scope Chain

//function init() {
//  var name = "Mozilla"; // name ist eine von init erzeugte lokale Variable
//  function displayName() { // displayName() ist die innere, umschlossene Funktion, sprich die 'Closure'
//    console.log(name); // hier wird die in der umschließenden Eltern-Funktion deklarierte Variable benutzt    
//  }
//  displayName();    
//}
//init();

//function makeFunc() {
//  var name = "Mozilla";
//  function displayName() {
//    console.log(name);
//  }
//  return displayName;
//}
//
//// myFunc ist ein closure/Funktionsabschluss
//var myFunc = makeFunc();
//myFunc();

//function makeAdder(x) {
//  return function(y) {
//    return x + y;
//  };
//}
//
//// 2 closures durch die closure factory makeAdder erzeugt
//// closure Funktion + Ausführungsumgebung
//var add5 = makeAdder(5);
//var add10 = makeAdder(10);
//
//console.log(add5(2));  // 7
//console.log(add10(2)); // 12

// Anwendung des module pattern
//var counter = (function() {
//  var privateCounter = 0;
//  function changeBy(val) {
//    privateCounter += val;
//  }
//  return {
//    increment: function() {
//      changeBy(1);
//    },
//    decrement: function() {
//      changeBy(-1);
//    },
//    value: function() {
//      return privateCounter;
//    }
//  };   
//})();
//
//console.log(counter.value()); // logs 0
//counter.increment();
//counter.increment();
//console.log(counter.value()); // logs 2
//counter.decrement();
//console.log(counter.value()); // logs 1

/**
 * Was ist ein Closure?
 * Hier ist eine einfache Erklärung:

 * Stell dir vor, dass die äußere Funktion ein "Paket" ist, das sowohl eine Funktion als auch einige "Gegenstände"
 *(Variablen und Parameter) enthält. Die innere Funktion ist wie ein kleines Kind, das in diesem Paket aufwächst.
 * Auch wenn das Paket (die äußere Funktion) geschlossen und beiseite gelegt wird, kann das Kind (die innere Funktion)
 * immer noch auf die Gegenstände im Paket zugreifen.
 */
/**
 * What is a closure in JavaScript? Answer: A closure is an inner function that has access to the outer function's
 * variables and parameters. It allows the inner function to access and manipulate the outer function's variables,
 * even after the outer function has returned. 
 */
var makeCounter = function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  }  
};

var counter1 = makeCounter();
var counter2 = makeCounter();
console.log(counter1.value()); /* console.logs 0 */
counter1.increment();
counter1.increment();
console.log(counter1.value()); /* console.logs 2 */
counter1.decrement();
console.log(counter1.value()); /* console.logs 1 */
console.log(counter2.value()); /* console.logs 0 */