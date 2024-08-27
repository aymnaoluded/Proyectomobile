import { Component, inject, isStandalone } from '@angular/core';
import { ApiService } from '../services/api/api.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],


})
export class HomePage {

  items: any [] = [];
  allItems: any [] = [];
  private api = inject(ApiService);

  constructor() {}

  ngOnInit () {
    console.log('ngoninit homepage');
    this.getItems();
  }

  getItems() {
    this.allItems = this.api.items;
    this.items = [...this.allItems];
  }
  
}
