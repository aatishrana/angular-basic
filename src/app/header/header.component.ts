import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CuisineService } from '../services/cuisine-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  home: string = 'Home';
  order: string = 'Order';
  contact: string = 'Contact Us';

  constructor(private service: CuisineService) { }

  ngOnInit() {
  }

  onHomeClick(e) {
    this.service.openTab.emit('home');
  }

  onOrderClick(e) {
    this.service.onOrder.emit(true);
  }

  onContactClick(e) {
    this.service.openTab.emit('contact');
  }

}
