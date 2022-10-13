import { Component, OnInit } from '@angular/core';
import { ApiHolderService } from '../services/api-holder.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
   allProducts:any;
  constructor(private api:ApiHolderService ,private request : HttpClient ) { 
  }

  ngOnInit(): void {
   this.api.getProductList().pipe(map(res=>{
      this.allProducts =res;
    })).subscribe(data=>{
         this.allProducts.forEach((product:any)=>product['cartQuantity']=1);
    })

  }

}
