import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})
export class CuentaPage implements OnInit {


  usuario = {
    nombre: 'Raul Miranda',
    correo: 'Rau.miranda@duocuc.cl'
  }

  editar: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  
  editarCuenta() {
    console.log('Nombre Actualizado: ', this.usuario.nombre);

    this.editar = !this.editar;
  }

  
  
}


