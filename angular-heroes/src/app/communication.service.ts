import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  private subject = new Subject<any>();

  constructor() { }

  sendMessage(message: string) {
    this.subject.next({text: message});
  }

  clearMessage(): void {
    this.subject.next();
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
