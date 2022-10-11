import { Component, DoCheck, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit , DoCheck{
  selectedProduct: any[] = [];
  totalPriceValue:number = 0;
  constructor(private productService: ProductService) {}
  
  ngDoCheck(): void {
    this.totalPriceValue = 0;
    this.getTotalPrice()
  }
  
  ngOnInit(): void {
    this.productService.getProducts().subscribe((res) => {
      this.selectedProduct = res;
    });
    //this.totalPriceValue = this.totalPriceArray.reduce((a:number ,b:number):number=> +a + +b)
  }
   
  deleteProduct(index: number) {
    this.productService.cartProductList.splice(index,0)
    this.selectedProduct.splice(index, 1);
  }

  deleteFromCartList(index:number){
    this.productService.deleteFromCartList(index);
    this.selectedProduct.splice(index, 1);
  }
  
  plusProduct(index:number){
    this.selectedProduct[index].cartQuantity++;
  }

  minusProduct(index:number){
     this.selectedProduct[index].cartQuantity >1 ? this.selectedProduct[index].cartQuantity-- : false;
  }

    getTotalPrice() {
      this.selectedProduct.forEach(product => {
       let total = product.price * product.cartQuantity;
        this.totalPriceValue += total
      });
    
  }
}

