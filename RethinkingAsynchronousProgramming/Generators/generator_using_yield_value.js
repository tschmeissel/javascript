function *main() {
	yield 1;
	yield 2;
	yield 3;
}

var it = main();

console.dir(it.next()); // {value: 1, done: false}
console.log(it.next()); // {value: 2, done: false}
console.log(it.next()); // {value: 3, done: false}
console.log(it.next()); // {value: undefined, done: true}
