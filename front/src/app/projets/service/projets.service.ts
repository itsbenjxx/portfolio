import { Injectable } from '@angular/core';
import {httpResource} from '@angular/common/http';
import {Projet} from '../../models/projet.model';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProjetsService {
  private apiUrl = environment.apiUrl;

  readonly projectsResource = httpResource<Projet[]>(() => this.apiUrl+'/projet/list');
}
