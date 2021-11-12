import { Component, OnInit } from '@angular/core';

interface Person {name:string, age:number}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  bastien: Person = {name:"Girardin-Vincent Bastien", age: 21}

  persons: Person[] = [
    {name: "Bastien", age:21},
    {name: "Zinedine", age:24},
    {name: "Romain", age:30}
  ]

  constructor(){
    this.bastien.age = 666
  }

}
