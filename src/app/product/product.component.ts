import { Component, Input, OnInit } from '@angular/core';
import { Products } from '../products';
import { ProductService } from '../services/product.service';
import { IdProductHolderService } from '../services/id-product-holder.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
 @Input() product : Products = {
   "createdAt": "",
      "name": "",
      "image": "",
      "rate": 0,
      "count": 0,
      "description": "",
      "price": "",
      "reviews": [],
      "id": "",
      "cartQuantity" : 0
 }
  constructor( private productService:ProductService , private idService :IdProductHolderService ) {
   }

  ngOnInit(): void {
  }

  addToCart(product :Products){
    this.productService.addToCartList(product);
  }
  
  addProductDetails(){
    this.productService.setCartProduct(this.product);
  }
  setId(id:string){
    this.idService.setId(id)
  }
 
  status:boolean = false
  addClass(){
    this.status =!this.status
    setTimeout(() => {
      this.status =false;
    }, 800);
  }
}
