import { Component } from '@angular/core';

interface Skill {
  name: string;
  level: string;
}

interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.sass'
})
export class About {
  categories: SkillCategory[] = [
    {
      title: 'Front-end',
      icon: 'code',
      skills: [
        { name: 'TypeScript / Angular', level: '90%' },
        { name: 'JavaScript / Vue.js', level: '60%' },
        { name: 'CSS / SASS', level: '95%' },
        { name: 'HTML', level: '95%' },
      ]
    },
    {
      title: 'Back-end',
      icon: 'database',
      skills: [
        { name: 'PHP / Symfony', level: '90%' },
        { name: 'Java / Spring Boot', level: '80%' },
        { name: 'Laravel', level: '70%' },
        { name: 'Node.js / NestJS', level: '60%' },
      ]
    },
    {
      title: 'Bases de données',
      icon: 'cloud',
      skills: [
        { name: 'MySQL', level: '90%' },
        { name: 'PostgreSQL', level: '90%' },
        { name: 'MongoDB', level: '70%' },
        // { name: 'ElasticSearch', level: '70%' },
      ]
    }
  ];
}
