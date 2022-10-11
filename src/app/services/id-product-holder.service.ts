import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class IdProductHolderService {
  private id = new BehaviorSubject('0');
  idValue = this.id.asObservable();
  constructor() { }

  setId(id:string){
    this.id.next(id)
  }
}
