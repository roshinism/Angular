import { Component, OnInit } from '@angular/core';
import { FriendsServiceService } from "../service/friends-service.service";

@Component({
  selector: 'cts-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  allFriends:any
  selectedFriend:any
  selected=0
  myid=""
myname=""
mylocation=""
mytype=""
  
  constructor(private frndService:FriendsServiceService) { }

  ngOnInit() {
    this.getAllFriends()
  }

  getAllFriends =function()
  {
    this.frndService.getAllFriends().subscribe((response)=>{
      console.log(response)
      this.allFriends = response
    })
  }

  viewFriend= function(selectedFriend){
    this.selected = this.allFriends[selectedFriend].id
    this.frndService.getFriendById(this.selected).subscribe((response)=>{
        console.log(response)
        this.selectedFriend = response.name
      })
  }

  deleteFriend= function(sf){
    this.selected = this.allFriends[sf].id
    this.frndService.deleteFriendById(this.selected).subscribe((response)=>{
        console.log(response)
       this.getAllFriends()
      })
  }


  addFriend= function(tempFriend){
    console.log(tempFriend.value)
    this.newFriend= tempFriend.value
this.frndService.createFriend(this.newFriend).subscribe((response)=>{
  console.log(response);
  this.getAllFriends()
})
  }

  updateFriend(selectedFriend){
    this.selected = this.allFriends[selectedFriend].id
    this.frndService.getFriendById(this.selected).subscribe((response)=>{
        console.log(response);
     this.myname = response.name
     this.mylocation=response.location
     this.mytype=response.type
     this.myid=response.id
     console.log(this.myid)
      })
  }


  updateFriendNow=function(){
this.newFriend={
  "name":this.myname,
  "location":this.mylocation,
  "type":this.mytype
}
this.frndService.updateFriendById(this.myid, this.newFriend).subscribe((response)=>{
  console.log(response)
  this.getAllFriends()
})
  }

}
