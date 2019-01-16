import { Component, OnInit } from '@angular/core';
import { CuisineService } from './services/cuisine-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'zomato-app';
  tab = 'home';

  constructor(private service: CuisineService) { }

  ngOnInit() {
    this.service
      .openTab
      .subscribe(value => this.tab = value);
  }

}
