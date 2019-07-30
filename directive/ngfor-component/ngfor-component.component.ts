import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cts-ngfor-component',
  templateUrl: './ngfor-component.component.html',
  styleUrls: ['./ngfor-component.component.css']
})
export class NgforComponentComponent implements OnInit {
  display1 = true
  //display1 = false
  name= "India"
  scores:any
score=10;
indscore=40;
friendsScores= [10,15,20,30,35, 9, 99, 5, 8, 2]
friends=["Damon", "Stefan", "Alaric", "Jeremy", "Enzo", "Matt", "Tyler"]
//array of JSON objects

friendScores =[
  {
  "name":"Damon",//key:value pair
  "score":21
  },
  {
    "name":"Stefan",//key:value pair
    "score":8
    },
    {
      "name":"Alaric",//key:value pair
      "score":20
      },
      {
        "name":"Matt",//key:value pair
        "score":0
        }

]  

friendClicked(ct){
  console.log("Hello from " + this.friends[ct])
}

display(ct){
  console.log("This is " +this.friendScores[ct].name+ " and my score is " + this.friendScores[ct].score)
}

constructor() { }

  ngOnInit() {
  }

}
