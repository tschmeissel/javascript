// https://www.sitepoint.com/currying-in-functional-javascript/
//
// https://stackoverflow.com/questions/36314/what-is-currying
// Currying is useful if you find you have a function where you are pass in a parameter which never changes.
// (Possibly a class with lots of reusable methods?) Instead of always passing in that same parameter,
// you curry the function to only pass in the parameters that do change – camjocotem Jan 28 '19 at 14:08


const add = function(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    }
  }
}

// same curryied function with arrow syntax

//const add = a => b => c => {
//  return a + b + c;
//}

console.log(add(2)(3)(5));