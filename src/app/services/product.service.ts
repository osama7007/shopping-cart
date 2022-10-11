import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Products } from '../products';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  setCartProduct(product: Products) {
    throw new Error('Method not implemented.');
  }
 
  private product = new BehaviorSubject<any>([]);

  

  cartProductList:any[]=[];
  constructor() {}

  setProduct(product: any) {
        this.cartProductList.push(...product);
       this.product.next(product);
  }
    getProducts() {
    return this.product.asObservable();
  }
  
  addToCartList(product:any){
    let result = this.cartProductList.find((item) => item.id === product.id);
    if (!result) {
      this.cartProductList.push(product);
      this.product.next(this.cartProductList);
    }
}

deleteFromCartList(index:number){
  this.product.forEach(()=>this.cartProductList.splice(index,1))
}

}
