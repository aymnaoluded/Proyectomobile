import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario: any ={

    nombreUsuario: '',
    email: '',
    password: '',
    confirmarPassword: ''

  }

  loginUser: string = '';
  passwordUser: string = '';

  constructor( private router: Router , private activedroute: ActivatedRoute , private alertController: AlertController ) { 

    this.activedroute.queryParams.subscribe(param =>{

      if(this.router.getCurrentNavigation()?.extras.state){

        this.usuario.nombreUsuario = this.router.getCurrentNavigation()?.extras?.state?.['nombreUser'];
        this.usuario.email = this.router.getCurrentNavigation()?.extras?.state?.['email'];
        this.usuario.password = this.router.getCurrentNavigation()?.extras?.state?.['password'];
        this.usuario.confirmarPassword = this.router.getCurrentNavigation()?.extras?.state?.['confirmarPassword'];

      }


    })



  }

  ngOnInit() {
  }


  iniciar(){

    if(this.loginUser == this.usuario.nombreUsuario && this.passwordUser == this.usuario.password){

      this.router.navigate(['/home'])

    }else if(this.loginUser == '' && this.passwordUser == ''){
      this.rellenarAlert()

    }else if (this.loginUser == '' || this.passwordUser == ''){

      this.rellenarAlert()

    }else{

      this.userAlert()

    }



  }

  async userAlert() {
    const alert = await this.alertController.create({
      header: "",
      message: "Usuario inexistente",
      buttons: ['OK'],
    });

    await alert.present();
  }

  async rellenarAlert() {
    const alert = await this.alertController.create({
      header: "Falta rellenar un campo",
      message: "Rellene todos los campos",
      buttons: ['OK'],
    });

    await alert.present();
  }

}