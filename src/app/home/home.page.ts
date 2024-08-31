import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],


})
export class HomePage {

  items: any [] = [

    {
      id: '1',
      name: 'Hoodie',
      price: 40,
      status: true,
      rating: 6.2,
      cover: 'assets/image/hoodie-blue.webp',
      description: 'Hoodie corteiz Uk',
    },
    {
      id: '2',
      name: 'falda',
      price: 30,
      status: true,
      rating: 6.2,
      cover: 'assets/image/falda-denin.webp',
      description: 'falda denin corteiz UK',
    },
    {
      id: '3',
      name: 'short',
      price: 40,
      status: true,
      rating: 6.2,
      cover: 'assets/image/short-denin.webp',
      description: 'short alcatraz',
    },
    {
      id: '4',
      name: 'tan top',
      price: 20,
      status: true,
      rating: 6.2,
      cover: 'assets/image/tan-top-blanca.webp',
      description: 'tan top algodon',
    },
    {
      id: '5',
      name: 'Skepta tshirt',
      price: 80,
      status: true,
      rating: 6.2,
      cover: 'assets/image/skepta tshirt.webp',
      description: 'Skepta Edition',
    },
    {
      id: '6',
      name: 'short rosa',
      price: 17,
      status: true,
      rating: 6.2,
      cover: 'assets/image/short rosa.webp',
      description: 'Short rosa',
    },
    {
      id: '7',
      name: 'club america',
      price: 90,
      status: true,
      rating: 6.2,
      cover: 'assets/image/club america.webp',
      description: 'Especial edition',
    },
    {
      id: '8',
      name: 'carni special',
      price: 80,
      status: true,
      rating: 6.2,
      cover: 'assets/image/carni special.webp',
      description: 'Especial edition',
    },
    //{
      //id: '9',
      //name: 'Air max 95 Corteiz',
      //price: 150,
      //status: true,
      //rating: 6.2,
      //cover: 'assets/image/Shoes corteiz.webp',
      //description: 'Especial edition',
    //},
    //{
      //d: '10',
      //name: 'Air max 95 Corteiz Green',
      //price: 80,
      //status: true,
      //rating: 6.2,
      //cover: 'assets/image/Shoes corteiz Green.webp',
      //description: 'Especial edition',
    //},
    
    
  ];

  allItems: any [] = [];
  

  constructor(private router: Router) {}

  ngOnInit () {
    console.log('ngoninit homepage');
    this.getItems();
  }


  getItems() {
    this.allItems = this.items;
    this.items = [...this.allItems];
  }

  navigatedeTotalleItem(id: number) {
    const selectedItem = this.items.find(item => item.id === id.toString());
    if (selectedItem) {
      this.router.navigate([`/detalleItem/${id}`], {
        state: { item: selectedItem }
      });
    }
    
  }

  navigateToCarrito(){
    this.router.navigate(['/home/carrito']);
  }

  

}



