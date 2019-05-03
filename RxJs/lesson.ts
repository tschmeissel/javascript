// https://www.youtube.com/watch?v=2LCo926NFLI
// <script src="https://cdnjs.cloudflare.com/ajax/libs/rxjs/6.5.1/rxjs.umd.min.js.map"></script>

// Es könnte ein event geben, wenn sync fertig ist.
// Die hitliste könnte der observable sein.
// Der sync könnte der Observer sein.

import * as rxjs from 'rxjs';

// helper to print values
function print(val) {
	let el = document.createElement('p');
	el.innerText = val;
	document.body.appendChild(el);
}

// what die observable sends to the observer
const obervable = Rx.Observable.create(observer => {
	observer.next("hello");
	observer.next("world");
});

observable.subscribe(val => print(val));