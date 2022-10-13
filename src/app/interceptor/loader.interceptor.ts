import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpParams,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs';
import { LoaderService } from '../services/loader.service';
@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(private loader:LoaderService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    this.loader.showSpinner();
    
    return next.handle(request).pipe(
      finalize(()=> this.loader.hideSpinner())
    )
  }
}
