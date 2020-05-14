import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../contact';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contactme',
  templateUrl: './contactme.component.html',
  styleUrls: ['./contactme.component.css']
})
export class ContactmeComponent implements OnInit {

  contact: Contact;
  items: Observable<any[]>;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(contactForm: NgForm) {
     console.log(contactForm.value);

  }

}
