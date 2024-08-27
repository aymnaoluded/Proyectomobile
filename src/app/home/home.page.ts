import { Component, inject } from '@angular/core';
import { ApiService } from '../services/api/api.service';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],


})
export class HomePage {

  items: any [] = [];
  allItems: any [] = [];
  private api = inject(ApiService);
  constructor(private router: Router) {}

  navigatedetalleItem(id: number) {
    this.router.navigate(['/Productos', id]);
  }

  ngOnInit () {
    console.log('ngoninit homepage');
    this.getItems();
  }


  getItems() {
    this.allItems = this.api.items;
    this.items = [...this.allItems];
  }

}



