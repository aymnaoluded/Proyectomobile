import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-agregarproductos',
  templateUrl: './agregarproductos.page.html',
  styleUrls: ['./agregarproductos.page.scss'],
})
export class AgregarproductosPage implements OnInit {

  constructor(private toastController : ToastController, private router: Router) { }

  ngOnInit() {
  }


  guardar(){

    this.registroToast('bottom')
    this.router.navigate(['/adminproductos'])

  }



  async registroToast(position:'bottom') {
    const toast = await this.toastController.create({
      message: 'Producto agregado con exito',
      icon: 'checkmark-outline',
      duration: 2500,
      position: position,
    });

    await toast.present();
  }

}
