import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { of } from 'rxjs';
import {Person} from '../../model/Person';
import {Product} from '../../model/Product';
import {Card} from '../../model/Card'; 



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent{
  
  @Input() data: Card[];
  displayData: Card[] = [];

  @Output() likeClick:EventEmitter<any> = new EventEmitter<any>()

  constructor(){
    this.data = [];
  }

  onLikeCLickend(id:number){
    this.likeClick.emit(id)
  }
  panier:Card[] = [];
  onAddBasket(product:Card){
    if(localStorage.getItem('monpanier') == null){
      product.qte = 1
      product.subTitle = parseFloat(product.subTitle.toString());
      this.panier.push(product)
      localStorage.setItem("monpanier", JSON.stringify(this.panier));
    }else{
      let myobj = JSON.parse(localStorage.getItem('monpanier') || "non")
      let find:boolean = false;
      myobj.forEach((element : any) => {
          if(element.id == product.id){
            find = true;
            element.qte = element.qte + 1;
          }
      });

      if(find == false){
        product.qte = 1;
        product.subTitle = parseFloat(product.subTitle.toString());
        myobj.push(product);
      }
      localStorage.setItem("monpanier", JSON.stringify(myobj));
    }
    

  }

  



}
