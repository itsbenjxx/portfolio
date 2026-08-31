import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProjetsService} from './service/projets.service';

interface Project {
  title: string;
  description: string;
  tags: string[];
  linkText: string;
  linkRef: string;
  linkIcon: string;
  image?: string;
  icon?: string;
  size?: 'large' | 'medium' | 'small' | 'horizontal';
}

@Component({
  selector: 'app-projets',
  imports: [
    CommonModule
  ],
  templateUrl: './projets.html',
  styleUrl: './projets.sass',
})
export class Projets {
  private readonly projetService =  inject(ProjetsService);

  projectsResource = this.projetService.projectsResource
}
