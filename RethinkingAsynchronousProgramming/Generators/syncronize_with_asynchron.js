function coroutine(g) {
	var it = g();
	return function() {
		return it.next.apply(it, arguments);
	}
}

function getData(d) {
	setTimeout(function() { run(d); }, 1000);
}

var run = coroutine(function* () {
	var x = 1 + (yield getData(10));
	var y = 1 + (yield getData(30));
	var answer = (yield getData("Meaning of life: " + (x + y)));
	
	console.log(answer);
});

run(); // a value here would be dropped
