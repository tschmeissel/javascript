function coroutine(g) {
	var it = g();
	return function() {
		return it.next.apply(it, arguments);
	}
}

var run = coroutine(function* () {
	var x = 1 + (yield);
	var y = 1 + (yield);
	yield(x + y);
});

run(); // a value here would be dropped
run(10);
console.log("Meaning of life: " + run(30).value);