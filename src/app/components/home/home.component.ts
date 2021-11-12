import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/Product';
import {Card} from '../../model/Card'; 
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  products:Product[] = [];

  data:Card[] = [];

  constructor(private productService:ProductService){



  }

  ngOnInit(){
    this.productService.getProducts().subscribe(products => {
      this.data = products.map((product) => {
        return {id:product.id, title: product.name, subTitle: product.price + ' €', image: product.picture}
      })
    });

  }

  onLikeCLickend(id:number){
    console.log(id)
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
