import { Component, Inject, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-detalle-item',
  templateUrl: './detalleItem.page.html',
  styleUrls: ['./detalleItem.page.scss'],
})

export class DetalleItemPage implements OnInit {
  itemId: string | null = null;
  item: any;

  cantidad : number = 1;

  private route = inject(ActivatedRoute);
  private navCtrl = inject(NavController);
  private router = inject(Router);


  constructor() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state) {
      this.item = navigation.extras.state['item'];
    }
  }

  ngOnInit() {
    if (!this.item) {
      console.error('Item no encontrado');
      this.router.navigate(['/home']);
    }
  }


  getItem(item: any) {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('check id: ', id);
    if (!id || id === '0') {
      this.navCtrl.back();
      return;
    }

    this.item = this.item.find((record: { id: string; }) => record.id ==
      id);
    console.log('Item:', this.item);
  }

  navigateToCarrito() {
    this.router.navigate(['/carrito']);
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