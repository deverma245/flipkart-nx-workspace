import { Component, computed, inject, signal } from '@angular/core';
import { Product, ProductService } from '../../core/services/product/product';
import { CommonModule } from '@angular/common';
import { httpResource } from '@angular/common/http';
interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}


@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.html',
  styleUrl: './product.scss',
})
export class ProductComponent {
    readonly products = computed(
      () => this.productsResource.value()?.products ?? []
    );
    readonly total = computed(
      () => this.productsResource.value()?.total ?? 0
    );
    readonly page = signal(1);
    readonly limit = signal(3);
    pagination: Pagination = {
    page: 1,
    limit: 3,
    total: 0,
    totalPages: 0,
    hasNextPage: false,
    hasPreviousPage: false,
  };

  private productService = inject(ProductService);
  readonly productsResource =
    httpResource<any>(() => ({
      url: '/api/products',

      params: {
        page: this.page(),
        limit: this.limit(),
      },
    }));

  ngOnInit() {
    console.log('ngOninit');
  }
  addToCart(product: Product) {
    console.log(product);
  }


nextPage(): void {

  this.page.update(previousPage => previousPage + 1);
}

previousPage(): void {
  if (this.page() === 1) {
    return;
  }

  this.page.update(previousPage => previousPage - 1);
}

}
