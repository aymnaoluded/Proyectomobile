import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  nombreUsuario: string = '';
  email: string = '';
  password: string = '';
  confirmarPassword: string = '';


  constructor( private router : Router , private alertController: AlertController , private toastController : ToastController) { }

  ngOnInit() {
  }

  registro(){

    let navigationextras: NavigationExtras = {

      state:{

        nombreUser: this.nombreUsuario,
        email: this.email,
        password: this.password,
        confirmarPassword: this.confirmarPassword

      }

    }


    if(this.nombreUsuario == '' ||  this.email == '' ||  this.password == '' || this.confirmarPassword == ''){
      this.rellenarAlert()
      return
    }else if (this.password != this.confirmarPassword){

      this.contraAlert()

    }else{

      this.registroToast('bottom')
      this.router.navigate(['/login'],navigationextras)

    }

  }

  async rellenarAlert() {
    const alert = await this.alertController.create({
      header: "Falta rellenar un campo",
      message: "Rellene todos los campos",
      buttons: ['OK'],
    });

    await alert.present();
  }

  async contraAlert() {
    const alert = await this.alertController.create({
      header: "Datos no coinciden",
      message: "Las contraseñas son diferentes",
      buttons: ['OK'],
    });

    await alert.present();
  }

  async registroToast(position:'bottom') {
    const toast = await this.toastController.create({
      message: 'Usuario registrado con exito',
      icon: 'checkmark-outline',
      duration: 2500,
      position: position,
    });

    await toast.present();
  }



}