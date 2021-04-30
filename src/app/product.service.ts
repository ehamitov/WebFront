import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from "@angular/common/http";
import{Product} from './products';
import {Category} from './categories';
import{LoginResponse} from "./categories";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  categories: Category[];
  BASE_URL = 'http://127.0.0.1:8000';
  constructor(private http: HttpClient) { }


  getCategoryProductList(id): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.BASE_URL}/api/categories/${id}/products`);
  }
  getProductList(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.BASE_URL}/api/products/`);
  }

  getProductDetail(id): Observable<Product> {
    return this.http.get<Product>(`${this.BASE_URL}/api/products/${id}/`);
  }

  login(username, password): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.BASE_URL}/api/login/`, {
      username,
      password
    })
  }

}
