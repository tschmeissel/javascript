// promises uninvert the inversion of the control
// they are not more than event listener for the "then" event
function finish() {
    console.log("finish");
}
function error() {
	console.log("error");
	finish();
}

function trackCheckout(info) {
	return new Promise(function(resolve, reject) {
		// here comes the processing code
		// which leads to successful completion
		// or an error.
		resolve();
	});
}

var promise = trackCheckout({});

promise.then(finish, error);