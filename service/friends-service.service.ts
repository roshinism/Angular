import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FriendsServiceService {

  constructor(private http:HttpClient) { }

  getAllFriends(){
    return this.http.get("http://localhost:3000/friendsdata")
  }

  getFriendById(fid):Observable<any>{
    return this.http.get("http://localhost:3000/friendsdata/"+fid)
  }

  deleteFriendById(fid){
    return this.http.delete("http://localhost:3000/friendsdata/"+fid)
  }

  createFriend(friend){
    return this.http.post("http://localhost:3000/friendsdata/", friend)
   }

   updateFriendById(id, friend){
    return this.http.put("http://localhost:3000/friendsdata/" +id, friend)
   }

}
