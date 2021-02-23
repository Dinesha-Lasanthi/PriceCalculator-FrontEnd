import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { PriceCalculatorComponent } from './modules/price-calculator/price-calculator.component';
import { PriceListComponent } from './modules/price-list/price-list.component';

const routes: Routes = [

  {
    path: '',
    component: LayoutComponent,
    children: [

      {
        path: '', component: PriceListComponent
      },
      {
        path: 'calculator', component: PriceCalculatorComponent
      },
    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
