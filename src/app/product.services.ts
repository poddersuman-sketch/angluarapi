import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductInterFace } from './product-inter-face';

@Injectable({
  providedIn: 'root',
})

export class ProductService {
  private apiUrl = "https://jsonplaceholder.typicode.com/todos/";
  constructor(private http: HttpClient)
  {
    
  }  
  getProducts(): Observable<ProductInterFace[]> 
  {
    return this.http.get<ProductInterFace[]>(this.apiUrl);
  }
}
