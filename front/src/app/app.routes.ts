import { Routes } from '@angular/router';
import {Home} from './home/home';
import {Projets} from './projets/projets';
import {Contact} from './contact/contact';
import {About} from './about/about';

export const routes: Routes = [
  { path: '', component: Home},
  { path: 'projets', component: Projets},
  { path: 'about', component: About},
  { path: 'contact', component: Contact},
];
