import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  home: string = 'Home';
  order: string = 'Order';
  contact: string = 'Contact Us';
  
  constructor() { }

  ngOnInit() {
  }

}
