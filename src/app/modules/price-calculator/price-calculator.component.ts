import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PriceService } from '../price.service';

@Component({
  selector: 'app-price-calculator',
  templateUrl: './price-calculator.component.html',
  styleUrls: ['./price-calculator.component.css']
})
export class PriceCalculatorComponent implements OnInit {

  formGroup: FormGroup;
  disableSelect = new FormControl(false);
  product: any=[]
  amount: any;
  constructor(private priceService: PriceService,private _router: Router) { }
  ngOnInit(): void {
    this.initForm();

    this.priceService.getProduct().subscribe((data: any) => {
      this.product = (data);

    });
  }
  initForm() {
    this.formGroup = new FormGroup({
      carton: new FormControl ('', [Validators.required]),
      unit: new FormControl ('', [Validators.required]),
      productID: new FormControl('', [Validators.required]),
     })
  }

  calculationProcess() {
    if (this.formGroup.valid) {
      this.priceService.getCalculation(this.formGroup.value.productID,this.formGroup.value.unit,this.formGroup.value.carton).subscribe(results => {
         this.amount = (results);

      });
    }
  }

  backHome(){
    this._router.navigate([''])
  }

}
