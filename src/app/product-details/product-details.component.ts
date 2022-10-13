import { Component , OnInit } from '@angular/core';
import { ApiHolderService } from '../services/api-holder.service';
import { IdProductHolderService } from '../services/id-product-holder.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  id:any;
 productDetails: any;
  constructor(private api : ApiHolderService , private idService : IdProductHolderService) { }

  ngOnInit(): void {
    this.idService.idValue.subscribe(val=> this.id =val)
    this.api.getProductDetails(this.id).subscribe(res=>{
      this.productDetails =res;
    });
  }
}
