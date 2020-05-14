import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
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

  constructor(public db: AngularFireDatabase) { }

  ngOnInit() {
  }

  onSubmit(contactForm: NgForm) {
     console.log(contactForm.value);

  }

}
