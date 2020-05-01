// demonstration of the standard functions bind, call and apply
// its all about the current context a function is executed in

// there is always a current context
console.log("this: " + this);

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
		console.log("Button geclickt.");
	},
	// Objektmethode, die weiter unten als callback handler registriert wird
	handle : function() {
		this.log();
	}
}

// Registrieren des callback handlers
// handle runs in the context of a button object wich has no this.log function -> TypeError
//button.onClick(handler.handle);

// with bind the context can be switched to the appropriate handler object which has a this.log function -> ok
//button.onClick(handler.handle.bind(handler));

// alternatively this can be solved by using a anonymous function as parameter -> ok
button.onClick(function() {
	handler.handle();
}){}

button.click();

// You can also add extra parameters after the 1st (this) parameter and bind will pass in those values to the original function. Any additional parameters you later pass to // the bound function will be passed in after the bound parameters:

// Example showing binding some parameters
var sum = function(a, b) {
  return a + b;
};

var add5 = sum.bind(null, 5);
console.log(add5(10));

Which prints out:

15