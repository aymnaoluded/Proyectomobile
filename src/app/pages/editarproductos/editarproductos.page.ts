import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-editarproductos',
  templateUrl: './editarproductos.page.html',
  styleUrls: ['./editarproductos.page.scss'],
})
export class EditarproductosPage implements OnInit {


  item =  {

    id: '1',
    name: 'Hoodie',
     price: 40,
     status: true,
     cover: 'assets/image/hoodie-blue.webp',
     description: 'Hoodie corteiz Uk',


  }

      
  
  constructor(private toastController : ToastController, private router: Router) { }

  ngOnInit() {
  }


  guardar(){

    this.registroToast('bottom')
    this.router.navigate(['/adminproductos'])
  }


  async registroToast(position:'bottom') {
    const toast = await this.toastController.create({
      message: 'Producto modificado con exito',
      icon: 'checkmark-outline',
      duration: 2500,
      position: position,
    });

    await toast.present();
  }

}
