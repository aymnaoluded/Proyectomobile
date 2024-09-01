import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.page.html',
  styleUrls: ['./adminlogin.page.scss'],
})
export class AdminloginPage implements OnInit {

  userAdmin='welersins';
  passwordAdmin='ocultoStudio123';


  userLogin='';
  passwordLogin='';

  constructor(private router: Router , private alertController: AlertController) { }

  ngOnInit() {
  }

  ingresar(){

    if (this.userLogin != this.userAdmin && this.passwordLogin != this.passwordAdmin){

      this.userAlert()

    }else{

      this.router.navigate(['/adminprincipal']);

    }

  }


  async userAlert() {
    const alert = await this.alertController.create({
      header: "",
      message: "Datos incorrectos",
      buttons: ['OK'],
    });

    await alert.present();
  }

}
