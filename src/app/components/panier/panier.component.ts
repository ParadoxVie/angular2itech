import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/model/Card';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  data:any
  tot:number = 0;

  countTot(){
    this.tot = 0;
    if(this.data != null && this.data != "non"){
      this.data.forEach((element : any) => {
        this.tot = this.tot + (element.subTitle * element.qte)
      });
    }else{
      this.tot = 0;
    }
  }

  constructor() {
    if(localStorage.getItem('monpanier') == null){
      this.data = [];
    }else{
      this.data = JSON.parse(localStorage.getItem('monpanier') || 'non');
    }
    this.countTot();
   }


  ngOnInit(): void {
  }

  deleteOneProduct(datum:Card){
    if(datum.qte != undefined && datum.qte <= 1){
      for (let index = 0; index < this.data.length; index++) {
        const element = this.data[index];
        if(element.id == datum.id){
          this.data.splice(index, 1); 
          localStorage.setItem("monpanier", JSON.stringify(this.data));
          this.countTot();
        }
      }
    }else if(datum.qte != undefined){
      datum.qte = datum.qte - 1;
      localStorage.setItem("monpanier", JSON.stringify(this.data));
      this.countTot();
    }
  }

}
