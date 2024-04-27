import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { IProduct } from '../../types';
import { RouterModule } from '@angular/router';
import { CommonModule, NgFor } from '@angular/common';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-store',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './store.component.html',
  styleUrl: './store.component.scss',
})
export class StoreComponent {
  products: IProduct[] = [];
  environment: any = environment;
  constructor(private apiService: ApiService) {}

  fetchProducts() {
    this.apiService.getAllProducts().subscribe((response) => {
      this.products = response;
    });
  }

  ngOnInit() {
    this.fetchProducts();
  }
}
