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
        
        cover:'assets/image/hoodie-blue.webp',
        description: 'Hoodie corteiz Uk'
      },
      {
        id: '10',
        name: 'Hoodie Mirror Balenciaga',
        price: 80,
        status: true,
        cover: 'assets/image/Mirror.webp',
        description: 'Especial edition',
      },
      //{
        //id: '11',
        //name: 'Crop balenciaga',
        //price: 80,
        //status: true,
        //cover: 'assets/image/Balenciagazip.webp',
        //description: 'Especial edition',
      //},
    ],

    poleras: [
      {
        id: '7',
        name: 'Tshirt',
        
        cover:'assets/image/club america.webp',
        description: 'Hoodie special'
      },
      {
        id: '8',
        name: 'Tshirt',
        
        cover:'assets/image/carni special.webp',
        description: 'Especial edition'
      },
      {
        id: '5',
        name: 'Tshirt',
        
        cover:'assets/image/tan-top-blanca.webp',
        description: 'tank top'
      },
      {
        id: '4',
        name: 'Tshirt',
        
        cover:'assets/image/skepta tshirt.webp',
        description: 'Skepta Edition'
      },
      //{
        //id: '',
        //name: 'Tshirt',
        //
        //:'assets/image/',
        //description: ''
      //}

    ],

    pants: [
      {
        id: '2',
        name: 'Falda',
        
        cover:'assets/image/falda-denin.webp',
        description: 'Falda denin Corteiz UK'
      },
      {
        id: '3',
        name: 'Short',
        
        cover:'assets/image/short-denin.webp',
        description: 'Short Alcatraz'
      },
      {
        id: '6',
        name: 'Short rosa',
        
        cover:'assets/image/short rosa.webp',
        description: 'Short Rosa Alcatraz'
      },


    ]
  };



  constructor() { }

  ngOnInit() {
  }

}
