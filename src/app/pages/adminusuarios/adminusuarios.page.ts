import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminusuarios',
  templateUrl: './adminusuarios.page.html',
  styleUrls: ['./adminusuarios.page.scss'],
})
export class AdminusuariosPage implements OnInit {

  cantidad: number = 1;
  usuarios = [

    {
      nombre:'Raul'
    },   
    {
      nombre:'Benjamin'
    },
    {
      nombre:'Nicolas'
    },
    {
      nombre:'Martin',
    },


  ]

  constructor() { }

  ngOnInit() {
  }


  sumarCantidad() {
    this.cantidad += 1;
  }

  restarCantidad() {
    if (this.cantidad > 1) {
      this.cantidad -= 1;
    }
  }
}


