import { Component, OnInit} from '@angular/core';
import { FormGroup, Validators , FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit { 
   regex=/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-z]+)$/;
  registerGroupe : FormGroup;
  
  constructor(private fb:FormBuilder){
    this.registerGroupe = this.fb.group({
      email :['',[ Validators.email , Validators.required , Validators.pattern(this.regex)]],
      name :['' , Validators.required],
      username :['' , Validators.required],
      password :['' , Validators.required],
      confirmPassword :['' , Validators.required],

    });

  }
  ngOnInit(): void {
  }
 get formControls(){
    return this.registerGroupe.controls;
  }
  onSubmit(){
    console.log(this.registerGroupe.controls['email'].value)
  }
 
}
