import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cts-inbuilt',
  templateUrl: './inbuilt.component.html',
  styleUrls: ['./inbuilt.component.css']
})
export class InbuiltComponent implements OnInit {
salary = 10000
friend="Uber"
currentDate= new Date()

name="Roshini"

changename(){
  this.name="Reeves"
}
  constructor() { }

  ngOnInit() {
  }

}
