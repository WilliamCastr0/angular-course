import { Component, inject } from '@angular/core';

import { ProductListComponent } from '../product-list/product-list.component';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ProductListComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  productList: Product[] = [];
  productService: ProductService = inject(ProductService);

  constructor() {
    this.productList = this.productService.getAllProducts();
  }
}
