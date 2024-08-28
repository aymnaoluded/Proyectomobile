import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-item',
  templateUrl: './detalleItem.page.html',
  styleUrls: ['./detalleItem.page.scss'],
})
export class DetalleItemPage implements OnInit {
  itemId: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.itemId = this.route.snapshot.paramMap.get('id') || '';
    console.log('Item ID:', this.itemId);

  }
}