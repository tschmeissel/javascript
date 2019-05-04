// https://www.youtube.com/watch?v=2LCo926NFLI

// helper to print values
function print(val) {
	let el = document.createElement('p');
	el.innerText = val;
	document.body.appendChild(el);
}

// vanilla observable

const observable = Rx.Observable.create(observer => {
	observer.next("hello");
	observer.next("world");
});

observable.subscribe(val => print(val));

// observable from event

const clicks = Rx.Observable.fromEvent(document, "click");

clicks.subscribe(click => console.log(click));

// observable from promise

const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("resolved");
	}, 3000)
})

const obsvPromise = Rx.Observable.fromPromise(promise);
obsvPromise.subscribe(result => print(result));

// timer

const timer = Rx.Observable.timer(2000);

timer.subscribe(done => print("ding!!"));