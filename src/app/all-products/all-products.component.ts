import { Component, OnInit } from '@angular/core';
import { ApiHolderService } from '../services/api-holder.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
   allProducts:any;
  constructor(private api : ApiHolderService) { 
  }

  ngOnInit(): void {
   this.api.getProductList().subscribe(res=>{
      this.allProducts =res;
      this.allProducts.forEach((product:any)=>product['cartQuantity']=1);
    });
  }

}
