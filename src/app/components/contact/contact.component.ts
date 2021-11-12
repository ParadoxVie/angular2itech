import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/model/Contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent  {


  contact:Contact = {name:'', email:'', phone:'', message:''}

  constructor(private contactService: ContactService) {}

  onSubmit(){
    this.contactService.create(this.contact).subscribe();
  }



}
