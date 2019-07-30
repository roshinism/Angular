import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomService {
private scores = [1,2]

private pi = 3.14

  getPi()
  {
  return this.pi
}

getScores()
{
  return this.scores
}
putScores(score)
{
  this.scores.push(score)
}

putMessage(){
  console.log("Command Received")
}
  constructor() { }
}
