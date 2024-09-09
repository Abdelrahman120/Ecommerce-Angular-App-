import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductsRequestService } from '../services/products-request.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products: any;
  @Output() productAddedToCart = new EventEmitter<any>();
  constructor(
    private router: Router,
    private productsRequestService: ProductsRequestService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.productsRequestService.getProductsList().subscribe((res: any) => {
      this.products = res.products;
    });
  }

  ShowDetails(id: number) {
    this.router.navigate(['/product-details', id]);
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    console.log(product);
    alert('Product added to cart');
  }

}
