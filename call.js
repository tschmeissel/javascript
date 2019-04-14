// call()
function gebeNamenAus() {
	console.log(arguments);
	/* Fehler: arguments ist kein Array */
	// arguments.forEach(function(argumen) {
		// console.log(argument);
	// })
	// usage of function borrowing
	// node that forEach is accessed but not called as a function
	// the funtion call comes by call
	// the difference is that this works for array-like objects like arguments but the upper not
	Array.prototype.forEach.call(arguments, function(argument) {
		console.log(argument);
	})
}
gebeNamenAus('Max', 'Moritz');