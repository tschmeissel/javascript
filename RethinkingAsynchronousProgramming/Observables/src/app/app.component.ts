import { Component } from '@angular/core';
//import { Rx } from 'rxjs/Rx';
import { Observable } from 'rxjs';
//import 'rxjs/add/observable/fromEvent';
import {fromEvent} from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world-app';
  
  ngOnInit() {
	//this.ModifyDOMElement();
	let button = document.getElementById("myButton");
	
	console.log("button", button);	
	
	//var obsv = Observable.fromEvent(button, "click");
	var obsv = fromEvent(button, "click");
	
	console.log("observable: ", obsv);
  }
  
//ModifyDOMElement() : void
// { 
//   //Do whatever you wish with the DOM element.
//   let domElement = this._elementRef.nativeElement.querySelector(`#myButton`);
//   console.log("button", domElement);
// } 
//}  
}
