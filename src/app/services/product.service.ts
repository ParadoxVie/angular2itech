import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Product } from '../model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  


  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(environment.API.baseurl + environment.API.endpoint.product)
  }
  get(id:number): Observable<Product>{
    return this.http.get<Product>(environment.API.baseurl + environment.API.endpoint.product + '/' + id);
  }

  constructor(private http:HttpClient) {}
}
