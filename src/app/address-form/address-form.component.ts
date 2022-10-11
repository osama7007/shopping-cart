import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Validators } from '@angular/forms';
@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent implements OnInit {

  constructor(private fb:FormBuilder) {}
  
  form = this.fb.group({
    addresses:this.fb.array([])
  })
  
  ngOnInit():void {}

   get addresses(){
    return this.form.controls['addresses'] as FormArray;
   }
  addAddress(){
    const address = this.fb.group({
      address : ['', Validators.required], 
      street : ['' , Validators.required],
      country : ['' , Validators.required],
      city : ['' , Validators.required],
    });
    this.addresses.push(address);
  }
  deleteAddress(Index:number){
    this.addresses.removeAt(Index);
  }
}
