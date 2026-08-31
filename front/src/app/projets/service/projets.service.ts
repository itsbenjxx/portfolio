import { Injectable } from '@angular/core';
import {httpResource} from '@angular/common/http';
import {Projet} from '../../models/projet.model';

@Injectable({
  providedIn: 'root',
})
export class ProjetsService {
  private readonly apiUrl = 'http://localhost:3000/projet';

  // httpResource crée automatiquement les Signals : .value(), .isLoading(), .error()
  readonly projectsResource = httpResource<Projet[]>(() => this.apiUrl);
}
