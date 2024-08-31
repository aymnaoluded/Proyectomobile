import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-envio',
  templateUrl: './envio.page.html',
  styleUrls: ['./envio.page.scss'],
})
export class EnvioPage implements OnInit {

  direccion = {
    comuna: 'Providencia',
    region: 'Region Metropolitana',
    nombreCliente: 'Matias Cato',
    direccion: 'las aguilas 0365'
  };

  editar = false;

  editarDireccion() {
    this.editar = !this.editar;

    if (!this.editar) {
      console.log('Datos Actualizados: ', this.direccion);
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
