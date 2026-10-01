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

  // projectsResource = this.projetService.projectsResource

  projects = [
    {
      title: 'Nota Risques Urba',
      description: 'Une solution e-commerce de haute performance, conçue pour l\'évolutivité. Propose la création de documents dédiés au métier du notariat, des micro-interactions dynamiques et une interface sur mesure.',
      tags: ['Angular', 'Symfony', 'E-commerce'],
      linkText: 'Visiter le site',
      linkRef: 'https://www.nota-risques-urba.fr/',
      linkIcon: '→',
      image: 'img/nru-mockup.png',
      size: 'large',
    },
    {
      title: 'Natural Risks',
      description: 'Application web multiplateforme hybride proposant des fonctionnalitées propres aux diagnostiques immobilier.',
      tags: ['Angular', 'PWA', 'Symfony'],
      linkText: 'Visiter le site',
      linkRef: 'https://www.naturalsrisks.com/',
      linkIcon: '↗',
      image: 'img/nr-mockup.png',
      size: 'medium',
    },
    {
      title: 'ERP interne sur-mesure',
      description: 'Plateforme web de gestion centralisée multi-entités permettant l\'administration du portefeuille client, le suivi de la facturation et du cycle de vente, la gestion comptable, ainsi que le pilotage des campagnes de communication..',
      tags: ['Symfony', 'CRM', 'Architecture Multi-entités', 'Angular'],
      linkText: 'Projet interne (Accès restreint)',
      linkRef: '#',
      linkIcon: '</>',
      icon: 'picto/commercial.svg',
      size: 'small',
    },
    {
      title: 'Taï Dam Traiteur',
      description: 'Site vitrine sur-mesure pour un traiteur, intégrant une présentation immersive du savoir-faire culinaire et un module de prise de commande en ligne via un formulaire dynamique.',
      tags: ['Wordpress', 'UX/UI'],
      linkText: 'Visiter le site',
      linkRef: 'https://tai-dam-traiteur.fr/',
      linkIcon: '→',
      image: 'img/taidam-mockup.png',
      size: 'horizontal',
    }
  ];
}
