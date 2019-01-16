import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  home: string = 'Home';
  order: string = 'Order';
  contact: string = 'Contact Us';

  @Output() onOrder = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  onHomeClick(e) {
    console.log(e);
  }

  onOrderClick(e) {
    this.onOrder.emit(true);
  }

}
