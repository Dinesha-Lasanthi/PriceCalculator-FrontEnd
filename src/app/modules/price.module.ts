import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PriceListComponent } from './price-list/price-list.component';
import { PriceCalculatorComponent } from './price-calculator/price-calculator.component';


@NgModule({
  declarations: [PriceListComponent, PriceCalculatorComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class PriceModule { }
