// completion

const timer = Rx.Observable.timer(1000);
timer
	.finally(() => print("All done!"))
	.subscribe();
	
const interval = Rx.Observable.interval(1000)
		.finally(() => print("interval all done!"));
		
const subscription = interval.subscribe(x => print(x));
setTimeout(() => {
	subscription.unsubscribe();
}, 3000);

// operators
// map

const numbers = Rx.Observable.of(10, 100, 1000);
numbers
	.map(num => Math.log(num))
	.subscribe(x => print(x));