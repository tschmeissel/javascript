// generators are solving the non-local non-sequentiell reason ability problem
// What are they good for?
//  to simulate a state machine
function* gen() {
	console.log("Hello");
	yield;
	console.log("World");
}

var it = gen();
it.next();
it.next();
