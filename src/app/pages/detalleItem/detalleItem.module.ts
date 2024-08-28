import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DetalleItemPage } from './detalleItem.page';
import { Route, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: DetalleItemPage
  }
];

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      RouterModule.forChild(routes)
    ],
    declarations: [DetalleItemPage]
  })
  export class DetalleItemPageModule {}
  
