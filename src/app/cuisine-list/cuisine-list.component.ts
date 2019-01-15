import { Component, OnInit } from '@angular/core';
import { Cuisine } from '../model/Cuisine';

@Component({
  selector: 'app-cuisine-list',
  templateUrl: './cuisine-list.component.html',
  styleUrls: ['./cuisine-list.component.css']
})
export class CuisineListComponent implements OnInit {

  cuisines: Cuisine[] = [];

  constructor() { }

  ngOnInit() {
    this.addSampleData();
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
