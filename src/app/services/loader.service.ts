import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoaderService {
private loader = new BehaviorSubject(false);
loaderVal = this.loader.asObservable();
  constructor() { }
  showSpinner(){
    this.loader.next(true)
  }
  hideSpinner(){
    this.loader.next(false);
  }
}
