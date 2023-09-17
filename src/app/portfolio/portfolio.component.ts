import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  projects = [
    {
      name: 'Join',
      imgs: 'join',
      code: 'JavaScript',
      website: 'https://diana-asmus.developerakademie.net/Join/html/index.html',
      github: 'https://github.com/dianaasmus/Join-new.git'
    },
    {
      name: 'Escaping Earth',
      imgs: 'escaping-earth',
      code: 'JavaScript',
      website: 'https://diana-asmus.developerakademie.net/Escaping%20Earth/index.html',
      github: 'https://github.com/dianaasmus/Join-new.git'
    },
    {
      name: 'Join',
      imgs: 'join',
      code: 'Angular',
      website: 'https://diana-asmus.developerakademie.net/Join/html/index.html',
      github: 'https://github.com/dianaasmus/Join-new.git'
    }
  ];

  filteredProjects = this.projects.slice(); // Kopie des ursprünglichen Arrays

  filterByCode(code: string) {
    this.filteredProjects = this.projects.filter(project => project.code === code);
  }

  resetFilter() {
    this.filteredProjects = this.projects.slice();
  }
}