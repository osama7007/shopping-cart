import { Component, DoCheck, OnInit} from '@angular/core';
import { CountService } from '../services/count.service';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit ,DoCheck {

  count:number = 0;

  constructor(private countService:CountService , private cartList : ProductService) { 
  }
  
  ngDoCheck(): void {
    this.countService.counterVal.subscribe(()=>this.count = this.cartList.cartProductList.length)
  }

  ngOnInit(): void {}



}
