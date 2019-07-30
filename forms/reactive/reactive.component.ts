import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'cts-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

scoreForm:any
fname:any
score:any
country:any

  constructor() { }

  submitForm = function(sf){
    console.log(sf);
  }

  ngOnInit() {
    this.scoreForm = new FormGroup({
      //JSON objects
      fname:new FormControl("OB", Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.pattern('^[a-z A-Z]+$')
      ])),//if anything s passed inside the bracket.. it will be initialized in thr form
      /*score:new FormControl("",Validators.compose([
        Validators.min(10),
        Validators.max(20),
        Validators.required
      ])),*/
      score:new FormControl("",this.customerValidator),
      country:new FormControl()//custom validations

    })
  }

  customerValidator = function(controlInstance){
    console.log("-------------");
    console.log(controlInstance)
    if(controlInstance.value <5){
      return {score: true}
    }
  }
}
