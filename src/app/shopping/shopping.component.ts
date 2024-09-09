import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-shopping',
  standalone: true,
  imports: [],
  templateUrl: './shopping.component.html',
  styleUrl: './shopping.component.css',
})
export class ShoppingComponent {
  cartItems: any[] = [];
  totalCartPrice: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
    this.calculateTotalPrice();
  }

  clearCart() {
    this.cartItems = [];
    this.cartService.clearCart();
    this.totalCartPrice = 0;
  }

  increaseQuantity(cartItems: any) {
    this.cartService.increaseQuantity(cartItems);
    this.calculateTotalPrice();
  }

  decreaseQuantity(cartItems: any) {
    this.cartService.decreaseQuantity(cartItems);
    this.calculateTotalPrice();
  }

  removeFromCart(product: any) {
    this.cartService.removeFromCart(product);
    this.cartItems = this.cartItems.filter((item) => item.id !== product.id);
    this.calculateTotalPrice();
  }

  calculateTotalPrice() {
    this.totalCartPrice = this.cartItems
      .reduce((total, item) => total + item.quantity * item.price, 0)
      .toFixed(2);
  }
}
