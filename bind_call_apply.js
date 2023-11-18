// demonstration of the standard functions bind, call and apply
// its all about the current context a function is executed in

//
// first example
//
var button = {
	handler: null,
	// Funktion, die einen callback handler erwartet
	onClick : function(handler) {
		this.handler = handler;
	},
	click : function() {
		this.handler();
	}
};

var handler = {
	log : function() {
		console.log("Button clicked.");
	},
    // object method which gets registered as a call back later
	handle : function() {
		this.log();
	}
}

// register the callback without explicit binding
// then handle() runs in the context of the button object wich has no this.log() -> TypeError
//button.onClick(handler.handle);

// register the callback with binding to the handler object
// since the handler has this.log() it gets executed
//button.onClick(handler.handle.bind(handler));

// alternatively an anonymous function can be registered as callback which sets the right context
button.onClick(function() {
	handler.handle();
});

button.click();

//
// second example
//
function printThisAndData(...data) {
  console.log(this.data, ...data);
}

const obj = { data: 0 };
const data = [1, 2, 3];

const printObjAndData = printThisAndData.bind(obj);

printObjAndData(data);                  // logs: 0 [1, 2, 3]
printObjAndData(...data);               // logs: 0 1 2 3

//
// call & apply
//
// call a function with a given this context and individual arguments
printThisAndData.call(obj, data);       // logs: 0 [1, 2, 3]
printThisAndData.call(obj, ...data);    // logs: 0 1 2 3

// apply is just like call but requires arguments as array
printThisAndData.apply(obj, data);      // logs: 0 1 2 3
// printThisAndData.apply(obj, ...data);   // Throws a TypeError