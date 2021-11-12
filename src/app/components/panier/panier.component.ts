import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  data:any
  tot:number = 0;
  constructor() {
    this.data = JSON.parse(localStorage.getItem('monpanier') || "non")
    if(this.data != null && this.data != "non"){
      this.data.forEach((element : any) => {
        this.tot = this.tot + (element.subTitle * element.qte)
      });
    }else{
      this.tot = 0;
    }
   }


  ngOnInit(): void {
  }

}
