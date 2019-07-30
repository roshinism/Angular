import { Component, OnInit } from '@angular/core';
//import { HttpClient } from "@angular/common/http";
import { RemoteServiceService } from 'src/app/service/remote-service.service';


@Component({
  selector: 'cts-remote',
  templateUrl: './remote.component.html',
  styleUrls: ['./remote.component.css']
})
export class RemoteComponent implements OnInit {

  //constructor(private http:HttpClient) { }
  constructor(private remoteService:RemoteServiceService){}

  remoteUsers:any
  searchtext:any
 
ngOnInit() {
    this.remoteService.getRemoteUsers().subscribe(data =>{
      this.remoteUsers=data
    })
    console.log(this.remoteService)
  }
    /*this.http.get("https://jsonplaceholder.typicode.com/albums").subscribe(this.receivedData)
  }
  receivedData = function(received){
    console.log(received);//observable returned
    this.remoteUsers = received
    console.log(this.remoteUsers)*/
   /* this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((data)=>
    {
      console.log(data);
      this.remoteUsers = data
      console.log(this.remoteUsers)
    })
  }*/
  /*demoFunction =function(parameter)
  {
    //some line 1
    //statement 2
    return parameter
  }
  demoFunction2 =(parameter) =>
  {
    //some line 1
    //statement 2
    return parameter
  }
  demoFunction3 =(parameter) => {parameter}*/

}

