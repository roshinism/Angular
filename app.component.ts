import { Component } from '@angular/core';

@Component({
  selector: 'roshini',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The 1st Angular Project'
  name = 'Second Class'
  roshini = 'This is easy'

  sayHello() {
  return "Hello.. this is a method"
  }

  funcSayHello() { 
   return this.sayHello()
  }
}
