import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  constructor() { 
	console.log("my first angular 7 component");
	
	var engine = new Engine(23, "Pontiac");
	var auto = new Auto(engine);
  }

  ngOnInit() {
  }

}

class Car {
	// class members are public by default
	private _engine: string;
	// Fields
	// Constructor
	constructor(engine: string) {
		this._engine = engine;
	}
	// Properties
	get engine(): string {
		return this._engine;
	}
	set engine(value: string) {
		if (value == undefined) throw "Supply an Engine!";
		this._engine = value;
	}
	// Functions
	start() {
		return "Started " + this.engine;
	}
	
	stop() {
		return "Stopped " + this.engine;
	}
}

class Pet {
	constructor(public name: string) {}
}

class Engine {
	constructor(public horsePower: number,
				public engineType: string) {}
}

class Auto {
	private _engine: Engine;
	
	constructor(engine: Engine) {
		this._engine = engine;
	}
}