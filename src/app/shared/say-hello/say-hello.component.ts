import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-say-hello',
  templateUrl: './say-hello.component.html',
  styleUrls: ['./say-hello.component.css']
})
export class SayHelloComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
goToRegister(){
  this.router.navigate(['register']);
}
}
