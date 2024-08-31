import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
})
export class CatalogoPage implements OnInit {


  items = {
    hoodies: [
      {
        id: '1',
        name: 'Hoodie',
        price: 0,
        cover:'assets/image/hoodie-blue.webp',
        description: 'Hoodie corteiz Uk'
      },
      //{
        //id: '',
        //name: 'Hoodie',
        //price: 0,
        //cover:'assets/image/',
        //description: ''
      //}
    ],

    poleras: [
      {
        id: '7',
        name: 'Tshirt',
        price: 0,
        cover:'assets/image/club america.webp',
        description: 'Hoodie special'
      },
      {
        id: '8',
        name: 'Tshirt',
        price: 0,
        cover:'assets/image/carni special.webp',
        description: 'Especial edition'
      },
      {
        id: '5',
        name: 'Tshirt',
        price: 0,
        cover:'assets/image/tan-top-blanca.webp',
        description: 'tank top'
      },
      {
        id: '4',
        name: 'Tshirt',
        price: 0,
        cover:'assets/image/skepta tshirt.webp',
        description: 'Skepta Edition'
      },
      //{
        //id: '',
        //name: 'Tshirt',
        //price: 0,
        //:'assets/image/',
        //description: ''
      //}

    ],

    pants: [
      {
        id: '2',
        name: 'Falda',
        price: 0,
        cover:'assets/image/falda-denin.webp',
        description: 'Falda denin Corteiz UK'
      },
      {
        id: '3',
        name: 'Short',
        price: 0,
        cover:'assets/image/short-denin.webp',
        description: 'Short Alcatraz'
      },
      {
        id: '6',
        name: 'Short rosa',
        price: 0,
        cover:'assets/image/short rosa.webp',
        description: 'Short Rosa Alcatraz'
      },


    ]
  };



  constructor() { }

  ngOnInit() {
  }

}
