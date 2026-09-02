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
      title: 'Frontend',
      icon: 'code',
      skills: [
        { name: 'JS / Angular', level: '95%' },
        { name: 'TypeScript', level: '90%' },
        { name: 'Vue.js', level: '85%' },
        { name: 'CSS / SASS', level: '90%' },
      ]
    },
    {
      title: 'Backend',
      icon: 'database',
      skills: [
        { name: 'PHP / Symfony', level: '90%' },
        { name: 'Node.js / Nest.js', level: '70%' },
        { name: 'Java / Spring', level: '70%' },
        { name: 'MySQL / PostgreSQL / MongoDB', level: '85%' },
      ]
    },
    {
      title: 'Cloud & Tools',
      icon: 'cloud',
      skills: [
        { name: 'Git', level: '95%' },
        { name: 'Docker', level: '70%' },
        { name: 'CI/CD', level: '70%' },
        { name: 'AWS', level: '65%' },
      ]
    }
  ];
}
