import { Injectable } from '@angular/core';
import {Product} from './products';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {  Category } from './categories'
@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  BASE_URL = 'http://127.0.0.1:8000';
  constructor(private http: HttpClient) { }
  getCategoryList(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.BASE_URL}/api/categories/`);
  }

  getCategoryDetail(id): Observable<Category> {
    return this.http.get<Category>(`${this.BASE_URL}/api/categories/${id}/`);
  }

  getCategoryProductList(id:number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.BASE_URL}/api/categories/${id}/products/`);
  }


}
