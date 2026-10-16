import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { appendQueryParams } from '@flipkart/shared-http';
import { Observable } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

export interface ProductsResponse {
  products: Product[];
  total: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private http = inject(HttpClient);

  getProducts(params: Record<string, any>): Observable<ProductsResponse> {
    const url = appendQueryParams(
      '/api/products',
      params
    );
    return this.http.get<ProductsResponse>(
      url
    );
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(
      `/api/products/${id}`
    );
  }
}
