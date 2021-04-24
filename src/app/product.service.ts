import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { products } from './products';
import {HttpClient} from "@angular/common/http";
import{Product} from './products';
import {Category} from './categories';
import{LoginResponse} from "./categories";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  categories: Category[];
  BASE_URL = 'http://localhost:8000';
  constructor(private http: HttpClient) { }
  getProduct(id: number): Observable<any> {
    return of(products.find(product => product.id === id));
  }

  getProducts(): Observable<any> {
    return of(products);
  }

  getProductsByCategoryId(id: number): Observable<any> {
    return of(products.filter(product => product.category_id === id));
  }
  login(username, password): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.BASE_URL}/api/login/`, {
      username,
      password
    })
  }

}
