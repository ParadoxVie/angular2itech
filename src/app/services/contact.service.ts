import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Contact } from '../model/Contact';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }

  create(contact:Contact): Observable<Contact>{
    return this.http.post<Contact>(environment.API.baseurl + environment.API.endpoint.contact, contact)
  }
}
