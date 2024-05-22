import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { IProduct } from '../../../types';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
  ) {}
  environment: any = environment;
  product?: IProduct;
  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id');
    if (!productId) throw new Error('Product ID is required');
    this.apiService.getProductById(Number(productId)).subscribe((response) => {
      this.product = response.item;
    });
  }
}
