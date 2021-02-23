import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PriceService {

  constructor(private http: HttpClient) { }

  getProduct(): Observable<any> {
    return this.http.get('http://localhost:8080/api/v1/products');
  }

  getCalculation(unit: number,id: any,carton: number): Observable<any> {
    return this.http.get('http://localhost:8080/api/v1/calculate/' + unit +'/'+id+'/' + carton);
  }
}
