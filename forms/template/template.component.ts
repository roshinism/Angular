import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cts-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  fullname:any
  score:any
  country:any
users=[]


  /*scoreForm
  fullname="Roshini"
  score=10
  country="India"*/


  submitForm= function(sf)
  {
    console.log(sf.value);
    this.users.push(sf.value)
    console.log(sf.users);
  }
  constructor() { }

  ngOnInit() {
  }

}
