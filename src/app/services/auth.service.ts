import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject(false);
  logValue = this.loggedIn.asObservable();

  private leaveRegister = new BehaviorSubject(true);
  RegisterVal = this.leaveRegister.asObservable();
  constructor() { }

  setLogValue(val:boolean){
    this.loggedIn.next(val)
  }

  setRegisterAuth(val:boolean){
    this.leaveRegister.next(val)
  }

}
