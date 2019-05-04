// https://www.youtube.com/watch?v=2LCo926NFLI

// helper to print values
function print(val) {
	let el = document.createElement('p');
	el.innerText = val;
	document.body.appendChild(el);
}

const observable = Rx.Observable.create(observer => {
	observer.next("hello");
	observer.next("world");
});

observable.subscribe(val => print(val));

