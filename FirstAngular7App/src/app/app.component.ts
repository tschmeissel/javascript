import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'FirstAngular7App';
  
	constructor() {
		this.interfaces();
	}

	interfaces() {
		interface Person {
			name: string;
			age?: number;
			kids: number;
			calcPets: () => number;
			makeYounger: (years: number) => void;
			greet: (msg: string) => string;
		}
		
		let p: Person = {
			name: "Torsten",
			age: 48,
			kids: 2,
			calcPets: function() {
				return 0;
			},
			makeYounger: function(years: number) {
				return this.age -= years;
			},
			greet: function(msg: string) {
				return msg + ", " + this.name;
			}
		}
		
		var pets = p.calcPets();
		console.log("number of pets: ", pets);
		
		var newAge = p.makeYounger(10);
		console.log("new age: ", newAge);
		
		var msg = p.greet("Grüß, dich!");
		console.log("greeting: ", msg);
		
		interface SessionEval {
			addRating: (rating: number) => void;
			calcRating: () => number;
		}
		
		function SessionEvaluator(): SessionEval {
			let ratings: number[] = [];
			
			let addRating = (rating: number = 5) => {
				ratings.push(rating);
			}
			let calcRating = () => {
				let sum: number = 0;
				ratings.forEach(rating => {
					sum += rating;
				})
				
				return sum / ratings.length;
			}
			
			return {
				addRating: addRating,
				calcRating: calcRating
			}
		}
		
		let s = SessionEvaluator();
		s.addRating(3);
		s.addRating(5);
		s.addRating(9);
		s.addRating(8);
		console.log("rating: " , s.calcRating());
		console.log("typeof s:", typeof(s));
	}

	functions() {
		// function interface
		interface SquareFunction {
			(x: number, y: number): number;
		}
		
		var squareItBasic: SquareFunction =
			(num1, num2) => num1 * num2;
			
		// interface rectangle
		interface Rectangle {
			h: number;
			w?: number;
		}
		
		var squareIt: (rect: Rectangle) => number;
		
		var rectA = {h:7};
		var rectB = {h:7, w:12};
		
		squareIt = function(rect) {
			if (rect.w === undefined) {
				return rect.h * rect.h
			}
			return rect.h * rect.w;
		}
		
		console.log("rect A: ", squareIt(rectA));
		console.log("rect B: ", squareIt(rectB));
		
		var myFunc1 = function (h: number, w: number) {
			return h * w;
		}
		// the same with arrow function expression
		var myFunc2 = (h: number, w: number) => h * w;
		console.log("myFunc1: ", myFunc1(5,6));
		console.log("myFunc2: ", myFunc2(5,6));
		
		// declaration of a function
		var greetMe : (msg: string) => void;
		// implementation
		greetMe = (msg: string) => console.log(msg);
		// usage
		greetMe("Hello!");
	}

	objects() {
		// object types
		// object literals
		var square: object = {h:10, w:20};
		console.log("type of literal object: ", typeof(square));
		// functions
		var multiply = function(x: number): number {
			return x * x;
		}
		console.log("typeof function: " + typeof(multiply));
	}

	stingNullUndefined() {
		// string array
		
		// null
		const guitarSales: any = null;
		console.log("guitar sales typeof: ", guitarSales, typeof(guitarSales));
		
		// undefined
		let quantity: number;
		console.log("quantity: ", quantity, typeof(quantity));
		let company = undefined;
		console.log("company: ", company, typeof(company));
	}
	
	anyAndPrimitives() {
		// any
		var data: any;
		var doSomething:any = function(arg:any) {
			return arg;
		};
		var x:any = doSomething(5);
		
		// primitive
		const age: number = 21;
		const score = 45.99;
		console.log("type of score: " , typeof(score));
		const hasData: boolean = true;
		console.log("type of has data: " , typeof(hasData));
		const isClever = true;
		console.log("type of is clever: " , typeof(isClever));
		const isBald = function() { return "yes";}
		const hasHair = !!isBald();
		console.log("type of has hair: ", hasHair);
	}
}
