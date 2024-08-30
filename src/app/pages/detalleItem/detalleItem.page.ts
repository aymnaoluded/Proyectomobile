import { Component, Inject, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-detalle-item',
  templateUrl: './detalleItem.page.html',
  styleUrls: ['./detalleItem.page.scss'],
})

export class DetalleItemPage implements OnInit {
  itemId: string | null = null;
  item: any;

  private route = inject(ActivatedRoute);
  private navCtrl = inject(NavController);
  private api = inject(ApiService);
  private router = inject(Router);
  
ngOnInit() {
  this.itemId = this.route.snapshot.paramMap.get('id') || '';
  console.log('Item ID:', this.itemId);

  if (this.itemId) {
    this.getItem(this.itemId);
  }
}

getItem(item: any){
  const id = this.route.snapshot.paramMap.get('id');
  console.log('check id: ', id);
  if (!id || id === '0') {
    this.navCtrl.back();
    return;
  }

  this.item = this.api.items.find(record => record.id ==
     id);
  console.log('Item:', this.item);
}
  
navigateToCarrito(){
  this.router.navigate(['/carrito']);
}


}