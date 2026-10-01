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
        { name: 'JS / Angular', level: '90%' },
        { name: 'TypeScript', level: '90%' },
        { name: 'CSS / SASS', level: '90%' },
      ]
    },
    {
      title: 'Back-end',
      icon: 'database',
      skills: [
        { name: 'PHP / Symfony', level: '90%' },
        { name: 'Node.js / Nest.js', level: '60%' },
        { name: 'Java / Spring Boot', level: '80%' },
      ]
    },
    {
      title: 'Bases de données',
      icon: 'cloud',
      skills: [
        { name: 'MySQL', level: '90%' },
        { name: 'PostgreSQL', level: '90%' },
        { name: 'MongoDB', level: '70%' },
      ]
    }
  ];
}
