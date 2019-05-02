import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { ILoaderState } from '../Helper/ILoaderState';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private loaderSubject : Subject<ILoaderState>;
  public loaderState : Observable<ILoaderState>;
  constructor() { 
    this.loaderSubject = new Subject<ILoaderState>();
    this.loaderState = this.loaderSubject.asObservable();

  }
  show() {
    this.loaderSubject.next(<ILoaderState>{ show: true });
  }
  hide() {
    this.loaderSubject.next(<ILoaderState>{ show: false });
  }
}
