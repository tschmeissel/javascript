function error() {
	console.error("something went wrong");
}

function doThingsFirst() {
	return new Promise(function(resolve, reject) {
		console.log("doing that at first");
		resolve();
	});
}

function doThingsSecond() {
	return new Promise(function(resolve, reject) {
		console.log("doing that at second");
		resolve();
	});
}

function doThingsLast() {
	return new Promise(function(resolve, reject) {
		console.log("doing that at last");
		resolve();
	});
}

doThingsFirst().then(function() {
	console.log("first things are done, process result");
	doThingsSecond().then(function() {
		console.log("second things are done, process result");
		doThingsLast().then(function() {
			console.log("last things are done, process result");
		}, error);
	}, error);
}, error);
