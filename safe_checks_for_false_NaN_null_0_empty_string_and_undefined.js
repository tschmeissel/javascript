// best way to check for null, 0, false and 'undefined', NaN, ''

var value; // undefined

if (value) {
    // will evaluate to true for:
    //     true
    //     " "
    //     <>0
    //     {}
	// will evaluate to false for:
	//     NaN
	//     empty string ("")
	//     0
	//     undefined
	//     null
	//     false
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
if (value != void 0) {
	// will evaluate to true if value
	//      NaN
	//      empty string ("")
    //      " "
	//      0
	//      false
    //      {}
}
if (value === void 0) {
	// will evaluate to true if value
	//		undefined
}
if (value !== void 0) {
	// will evaluate to true if value
	//     	NaN
	//     	empty string ("")
    //      " "
	//     	0
	//     	false
    //      {}
	//     	null
}

(function () {
  let value = NaN; // undefined

  console.log(value);

  /**
   * Expression will be true for every value which is not strictly of type boolean with value false.
   * Will be true for
   *  NaN
   *  0,
   *  <> 0,
   *  {},
   *  true,
   *  "",
   *  " ",
   *  null,
   *  undefined
   * Will be false for
   *  false
   */
  if (value !== false) {
    console.log("true");
  } else {
    console.log("false");
  }

  /**
   * better
   */
  if (value === false) {
    console.log("false");
  } else {
    console.log("true")
  }
})();
