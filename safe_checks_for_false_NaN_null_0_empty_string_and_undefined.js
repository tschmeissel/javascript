// there 6 falsy values in Javascript
// best way to check for null, 0, false and 'undefined', NaN, ''

// In JavaScript, a truthy value is a value that translates to true when evaluated in a Boolean context. All values are truthy unless
// they are defined as falsy (i.e., except for false , 0 , "" , null , undefined , and NaN ).

var value;
if (value) {
	// will evaluate to false if value is:
	//     null
	//     undefined
	//     NaN
	//     empty string ("")
	//     0
	//     false
    // will evaluate to true if value is:
    //     true
    //     " "
    //     <>0
}

// Furthermore, if you do not know whether a variable exists (that means, if it was declared) you should check with the typeof operator. For instance

if (typeof foo !== 'undefined' ) {
	// foo could get resolved and it's defined
	console.log("defined foo");
} else {
	console.log("got undefined foo");
}

if (value == void 0) {
	// will evaluate to true if value
	//		null
	//		undefined
}
if (value === void 0) {
	// will evaluate to true if value
	//		undefined
}
if (value != void 0) {
	// will evaluate to true if value
	//		NaN
	//     	empty string ("")
	//     	0
	//     	false
}
if (value !== void 0) {
	// will evaluate to true if value
	//     	null
	//     	NaN
	//     	empty string ("")
	//     	0
	//     	false
}