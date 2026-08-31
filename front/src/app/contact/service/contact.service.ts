import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

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
  private apiUrl = environment.apiUrl;
  private readonly http = inject(HttpClient)

  sendMessage(payload: ContactFormPayload) {
    return this.http.post(this.apiUrl+'/contact/sendMessage', payload)
  }
}
