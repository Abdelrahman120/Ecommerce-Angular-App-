import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRequestService } from '../services/products-request.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  private productsRequestService= inject(ProductsRequestService)
  productDetails: any;
  @Input() id: string = '';
  ngOnInit() {
    this.productsRequestService.getProductDetails(this.id).subscribe((res) => {
      this.productDetails=res
    });
  }

  discountedPrice() {
    const price = Number(this.productDetails?.price);
    const discountPercentage = Number(this.productDetails?.discountPercentage);
    const discounted = price * (1 - discountPercentage / 100);
    return discounted.toFixed(2);
  }
}
