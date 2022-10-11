import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CountService {
  private counter = new BehaviorSubject(0)
  counterVal = this.counter.asObservable();
  constructor() {}
  
  changeCounter(value:number){
    this.counter.next(value)
  }
}
