import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";
@Component({
  selector: 'cts-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
link:any
date:any
country:any
score:any

  users=[]
youtube
myurl
  submitForm(sf)
  {
    console.log(sf.value);
    this.users.push(sf.value);
    console.log(sf.users);
    //console.log(sf.value.myfullname)
    
  }

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

}
