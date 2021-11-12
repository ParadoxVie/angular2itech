import { Component, OnInit } from '@angular/core';
import {Person} from '../../model/Person';
import {Card} from '../../model/Card'; 


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit{
  persons: Person[] = [
    {id: 1,name: "Karim Benzema", age: 33, description: "Bonjour voici la description de Karim Benzema", photo:"karim.jpg"},
    {id:2,name: "Olvier Giroud", age: 35, description: "Bonjour voici la description de Olvier Giroud", photo:"giroud.jpg"},
    {id:3,name: "Alex Morgan", age: 32, description: "Bonjour voici la description de Alex Morgan", photo:"morgan.jpg"},
  ]

  data:Card[] = [];

  ngOnInit(){
    this.data = this.persons.map((person) => {
      return {id:person.id,title: person.name, subTitle: person.age + 'ans', image: "../../../assets/image/" + person.photo}
    })
  }

  onLikeCLickend(id:number){
    console.log(id)
  }
}
