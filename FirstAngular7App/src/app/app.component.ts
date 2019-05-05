import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstAngular7App';
  
	constructor() {
		//this.anyAndPrimitives();
		//this.stingNullUndefined();
		
		// object types
		var square: object = {h:10, w:20};
		console.log("type of literal object: ", typeof(square));
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
