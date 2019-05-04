// hot vs. cold observables

const cold = Rx.Observable.create(observer => {
	observer.next(Math.random());
});

cold.subscribe(a => print(`Subscriber A: ${a}`));
// cold.subscribe(b => print(`Subscriber B: ${b}´));