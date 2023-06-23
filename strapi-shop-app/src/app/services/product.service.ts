import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map } from 'rxjs';
import { Response } from '../models/product-response.model';
 

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  message = ""
private BASE_URL : string = `http://localhost:1337/api/products`
private opts = { params: { populate: "*" } };

  constructor(private http : HttpClient) { 
    this.message = ""
  }

  getProducts(): Observable<Object> {
     return this.http.get<Response>(`${this.BASE_URL}`,this.opts).pipe(
      map((response) => response.data.map((x) => x.attributes))
    );;
  }
}
