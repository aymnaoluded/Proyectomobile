import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infousuario',
  templateUrl: './infousuario.page.html',
  styleUrls: ['./infousuario.page.scss'],
})
export class InfousuarioPage implements OnInit {

  usuario = {
    nombre: 'Raul Miranda',
    correo: 'Rau.miranda@duocuc.cl'
  }

  direccion = {
    comuna: 'Providencia',
    region: 'Region Metropolitana',
    nombreCliente: 'Raul Miranda',
    direccion: 'las aguilas 0365'
  };

  constructor() { }

  ngOnInit() {
  }

}
