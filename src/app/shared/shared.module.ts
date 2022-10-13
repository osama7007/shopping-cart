import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SayHelloComponent } from './say-hello/say-hello.component';


@NgModule({
  declarations: [
    SayHelloComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    SayHelloComponent,
  ]
})
export class SharedModule { }
