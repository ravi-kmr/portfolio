import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  showSection2 = false;
  frontEndDev = false;
  backEndDev = false;
  databases = false;
  devops = false;

  constructor() { }

  ngOnInit() {
  }

 

  showSection2Menu() {
    if (this.showSection2) {
    this.showSection2 = false;
    this.frontEndDev = false;
    this.backEndDev = false;
    this.databases = false;
    this.devops = false;
  } else {
    this.showSection2 = true;
  }
}

  showFrontEnd() {
    this.frontEndDev = true;
    this.backEndDev = false;
    this.databases = false;
    this.devops = false;
  }
  showBackEnd() {
    this.frontEndDev = false;
    this.backEndDev = true;
    this.databases = false;
    this.devops = false;
  }
  showDatabases() {
    this.frontEndDev = false;
    this.backEndDev = false;
    this.databases = true;
    this.devops = false;
  }
  showDevops() {
    this.frontEndDev = false;
    this.backEndDev = false;
    this.databases = false;
    this.devops = true;
  }
}
