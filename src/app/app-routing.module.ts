import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DetalleItemPageModule } from './pages/detalleItem/detalleItem.module';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'detalleItem',
    loadChildren: () => import('./pages/detalleItem/detalleItem.module').then( m => DetalleItemPageModule)
  },
  {
    path: "Home/Productos/:id",
    loadChildren: () => import('./pages/detalleItem/detalleItem.module').then(m => m.DetalleItemPageModule)
  }
  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
