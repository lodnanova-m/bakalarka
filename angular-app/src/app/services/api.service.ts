import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IOptions, IProduct } from '../../types';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  getAllProducts(): Observable<IProduct[]> {
    return this.httpClient
      .get<{ items: IProduct[] }>(`${environment.apiUrl}/products`)
      .pipe(map((response) => response.items));
  }
  getProductById(id: number): Observable<{ item: IProduct }> {
    return this.httpClient
      .get<{ item: IProduct }>(`${environment.apiUrl}/products/${id}`)
      .pipe(map((response) => response));
  }
}
