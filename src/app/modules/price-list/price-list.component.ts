import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { PriceService } from '../price.service';

export interface PeriodicElement {
  units: any;
  price: any;


}

const ELEMENT_DATA: PeriodicElement[] = [
  {units: 1, price: ' '},
  {units: 2, price: ' '},
  {units: 3, price: ' '},
  {units: 4, price: ' '},
  {units: 5, price: ' '},
  {units: 6, price: ' '},
  {units: 7, price: ' '},
  {units: 8, price: ' '},
  {units: 9, price: ' '},
  {units: 10, price: ' '},
  {units: 11, price: ' '},
  {units: 12, price: ' '},
  {units: 13, price: ' '},
  {units: 14, price: ' '},
  {units: 15, price: ' '},
  {units: 16, price: ' '},
  {units: 17, price: ' '},
  {units: 18, price: ' '},
  {units: 19, price: ' '},
  {units: 20, price: ' '},
  {units: 21, price: ' '},
  {units: 22, price: ' '},
  {units: 23, price: ' '},
  {units: 24, price: ' '},
  {units: 25, price: ' '},
  {units: 26, price: ' '},
  {units: 27, price: ' '},
  {units: 28, price: ' '},
  {units: 29, price: ' '},
  {units: 30, price: ' '},
  {units: 31, price: ' '},
  {units: 32, price: ' '},
  {units: 33, price: ' '},
  {units: 34, price: ' '},
  {units: 35, price: ' '},
  {units: 36, price: ' '},
  {units: 37, price: ' '},
  {units: 38, price: ' '},
  {units: 39, price: ' '},
  {units: 40, price: ' '},
  {units: 41, price: ' '},
  {units: 42, price: ' '},
  {units: 43, price: ' '},
  {units: 44, price: ' '},
  {units: 45, price: ' '},
  {units: 46, price: ' '},
  {units: 47, price: ' '},
  {units: 48, price: ' '},
  {units: 49, price: ' '},
  {units: 50, price: ' '},

];

export interface PeriodicElement2 {
  units2: any;
  price2: any;

}

const ELEMENT_DATA2: PeriodicElement2[] = [
  {units2: 1, price2: ' '},
  {units2: 2, price2: ' '},
  {units2: 3, price2: ' '},
  {units2: 4, price2: ' '},
  {units2: 5, price2: ' '},
  {units2: 6, price2: ' '},
  {units2: 7, price2: ' '},
  {units2: 8, price2: ' '},
  {units2: 9, price2: ' '},
  {units2: 10, price2: ' '},
  {units2: 11, price2: ' '},
  {units2: 12, price2: ' '},
  {units2: 13, price2: ' '},
  {units2: 14, price2: ' '},
  {units2: 15, price2: ' '},
  {units2: 16, price2: ' '},
  {units2: 17, price2: ' '},
  {units2: 18, price2: ' '},
  {units2: 19, price2: ' '},
  {units2: 20, price2: ' '},
  {units2: 21, price2: ' '},
  {units2: 22, price2: ' '},
  {units2: 23, price2: ' '},
  {units2: 24, price2: ' '},
  {units2: 25, price2: ' '},
  {units2: 26, price2: ' '},
  {units2: 27, price2: ' '},
  {units2: 28, price2: ' '},
  {units2: 29, price2: ' '},
  {units2: 30, price2: ' '},
  {units2: 31, price2: ' '},
  {units2: 32, price2: ' '},
  {units2: 33, price2: ' '},
  {units2: 34, price2: ' '},
  {units2: 35, price2: ' '},
  {units2: 36, price2: ' '},
  {units2: 37, price2: ' '},
  {units2: 38, price2: ' '},
  {units2: 39, price2: ' '},
  {units2: 40, price2: ' '},
  {units2: 41, price2: ' '},
  {units2: 42, price2: ' '},
  {units2: 43, price2: ' '},
  {units2: 44, price2: ' '},
  {units2: 45, price2: ' '},
  {units2: 46, price2: ' '},
  {units2: 47, price2: ' '},
  {units2: 48, price2: ' '},
  {units2: 49, price2: ' '},
  {units2: 50, price2: ' '},

];

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.css']
})
export class PriceListComponent implements OnInit {
  disableSelect = new FormControl(false);
  productID :any
  product: any=[]

  displayedColumns: string[] = ['units','price'];
  dataSource = ELEMENT_DATA;

  displayedColumns2: string[] = ['units2','price2'];
  dataSource2 = ELEMENT_DATA2;
  sum: any;

   constructor(private priceService: PriceService,private _router: Router) { }

  ngOnInit(): void {

    this.priceService.getProduct().subscribe((data: any) => {
      this.product = (data);

    });
  }

  calculation(){
    this._router.navigate(['/calculator'])
  }
}

