import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  isHovered!: boolean;

  projects = [
    {
      name: 'Join',
      imgs: 'join',
      filter: 'JavaScript',
      website: 'https://diana-asmus.developerakademie.net/Join/html/index.html',
      github: 'https://github.com/dianaasmus/Join-new.git',
      content: 'Join is a powerful Kanban project management tool that helps teams efficiently organize and manage their projects. With a user-friendly interface and a variety of features, Join provides an intuitive platform for collaboration and task progress.',
      code: 'HTML | CSS | JavaScript | Group project',
      isHovered: false,
    },
    {
      name: 'Escaping Earth',
      imgs: 'escaping-earth',
      filter: 'JavaScript',
      website: 'https://diana-asmus.developerakademie.net/Escaping%20Earth/index.html',
      github: 'https://github.com/dianaasmus/Escaping-Earth.git',
      content: 'In Escaping Earth, you control a character as they explore a world full of challenges and obstacles. A dynamic and interactive game that is easy for players of all ages to enjoy. Get ready to jump, run, and conquer levels in this thrilling adventure!',
      code: 'HTML | CSS | JavaScript OOP',
      isHovered: false,
    },
    // {
    //   name: 'DA-Bubble',
    //   imgs: 'da-bubble',
    //   code: 'Angular',
    //   website: 'https://diana-asmus.developerakademie.net/Join/html/index.html',
    //   github: 'https://github.com/dianaasmus/Join-new.git',
    //   content: '',
    // isHovered: false,
    // }
  ];

  filteredProjects = this.projects.slice();

  filterByCode(filter: string) {
    this.filteredProjects = this.projects.filter(project => project.filter === filter);
  }

  resetFilter() {
    this.filteredProjects = this.projects.slice();
  }

}