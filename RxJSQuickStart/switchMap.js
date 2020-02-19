// https://www.youtube.com/watch?v=6lKoLwGlglE
// observables using switchMap
// when you click the button the interval starts up
// if you click it again it start up again beginning from 0

// switchMap is useful to get an observable first before you can get another observable
//  like when you need a user id before you can start something
//  like you want to start a timer after some kind of event and stop it after another event

var button = document.querySelector("button");

var obs1 = Rx.Observable.fromEvent(button, "click");
var obs2 = Rx.Observable.interval(1000);

// switches values
// map in a sense of a verb
obs1.switchMap(
	event => {
		return obs2;
	}
).subscribe(value => print(value));