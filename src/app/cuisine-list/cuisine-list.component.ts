import { Component, OnInit, Input } from '@angular/core';
import { Cuisine } from '../model/Cuisine';
import { CuisineService } from '../services/cuisine-service';

@Component({
  selector: 'app-cuisine-list',
  templateUrl: './cuisine-list.component.html',
  styleUrls: ['./cuisine-list.component.css']
})
export class CuisineListComponent implements OnInit {

  cuisines: Cuisine[] = [];
  details;

  constructor(private service: CuisineService) { }

  ngOnInit() {
    this.addSampleData();
    this.service
      .onOrder
      .subscribe(value => this.details = value);
  }

  addSampleData() {
    for (let i of [1, 2, 3, 4, 5]) {
      this.cuisines.push({
        cuisine_info: {
          cuisine_id: i,
          cuisine_name: 'Vegetarian'
        }
      });
    }
  }

}
