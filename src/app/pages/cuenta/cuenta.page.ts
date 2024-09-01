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

  direccion = {
    comuna: 'Providencia',
    region: 'Region Metropolitana',
    nombreCliente: 'Raul Miranda',
    direccion: 'las aguilas 0365'
  };

  pedidos = {
    numeroPedido: '#1',
    producto: 'Carni Special',
    precio: '80',
    estado: 'Finalizado',
    cliente: 'Raul Miranda',
    cantidad: 1,
  };

  editar: boolean = false;


  editarDireccion() {
    this.editar = !this.editar;

    if (!this.editar) {
      console.log('Datos Actualizados: ', this.direccion);
    }
  }

  constructor() { }

  ngOnInit() {
  }

  
  editarCuenta() {
    console.log('Nombre Actualizado: ', this.usuario.nombre);

    this.editar = !this.editar;
  }

  

  
  
}


