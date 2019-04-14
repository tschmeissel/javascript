// apply()
// like call() but accepts an array of parameters as second parameter
function gebeNamenAus() {
	Array.prototype.forEach.apply(arguments, [function(argument) {
		console.log(argument);
	}])
}
gebeNamenAus('Max', 'Moritz');

console.log(Math.max(24, 44));
console.log(Math.max(24, 14, 44, 88));
console.log(Math.max(24, 14, 4711, 44, 88));
console.log(Math.max(24, 14, 5678, 4711, 44, 88));

var zahlen = [24, 14, 44, 88];
console.log(Math.max.apply(null, zahlen));