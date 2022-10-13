import { Injectable } from '@angular/core';
import { environment as env } from '@env';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiHolderService {

  constructor(private http : HttpClient) { }
  getProductList(){
    return this.http.get(`${env.api}`)
  }
  getProductDetails(id:string){
    return this.http.get(`${env.api}/${id}`)
  }

}
