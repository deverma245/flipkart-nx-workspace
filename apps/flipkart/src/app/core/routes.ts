import { Routes } from '@angular/router';
import { ProductComponent } from '../components/product/product';
import { RandomImageComponent } from '../components/random-image/random-image.component';
import { CustomTableComponent } from '../components/table/custom-table.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'products-list',
    pathMatch: 'full'
  },
  {
    path: 'products-list',
    component: ProductComponent
  },
  {
    path: 'random-image',
    component: RandomImageComponent
  },
  {
    path: 'custom-table',
    component: CustomTableComponent
  }
];