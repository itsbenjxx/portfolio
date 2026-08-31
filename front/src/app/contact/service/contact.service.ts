import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface ContactFormPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class ContactService {

  private readonly http = inject(HttpClient)
  private readonly apiUrl = 'http://localhost:3000/contact';

  sendMessage(payload: ContactFormPayload) {
    return this.http.post(this.apiUrl+'/sendMessage', payload)
  }
}
