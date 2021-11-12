import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {Card} from '../../model/Card'; 
import {Router} from '@angular/router'



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent{
  
  @Input() data: Card[];
  displayData: Card[] = [];

  @Output() likeClick:EventEmitter<any> = new EventEmitter<any>()
  @Output() addPanier:EventEmitter<any> = new EventEmitter<any>()

  constructor(private router: Router){
    this.data = [];
  }

  onLikeCLickend(id:number){
    this.likeClick.emit(id)
  }
  panier:Card[] = [];
  onAddBasket(product:Card){
    this.addPanier.emit(product)
  }
  onCardClick(datum:Card) {
    console.log(datum)
    this.router.navigateByUrl("product/"+ datum.id)
  }
}
