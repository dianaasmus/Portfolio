import { Component, ElementRef, ViewChild } from '@angular/core';
import { ObserverService } from '../observer.service';

/**
 * The `PortfolioComponent` is responsible for displaying a portfolio of projects.
 * It observes a specific DOM element and handles project filtering and animations.
 */
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  /**
   * Reference to the project element to be observed.
   */
  @ViewChild('project') projectToObserve!: ElementRef;


  /**
   * A flag indicating whether to trigger a fade-in animation.
   */
  fadeInAnimation: boolean = false;


  /**
   * A flag indicating whether a project is hovered.
   */
  public isHovered: boolean = false;


  updateIsHovered() {
    if (window.matchMedia('(min-width: 700px)').matches) {
      this.isHovered = true;
    } else {
      this.isHovered = false;
    }
  }


  private handleResize() {
    this.updateIsHovered(); // Aktualisierung bei Änderungen der Fenstergröße
  }

  
  /**
   * An array containing project information objects.
   */
  projects = [
    {
      name: 'Join',
      imgs: 'join',
      filter: 'JavaScript',
      website: 'https://diana-asmus.developerakademie.net/Join/html/index.html',
      github: 'https://github.com/dianaasmus/Join-new.git',
      content: 'Join is a powerful Kanban project management tool that helps teams efficiently organize and manage their projects. With a user-friendly interface and a variety of features, Join provides an intuitive platform for collaboration and task progress.',
      code: 'HTML | CSS | JavaScript | Group project',
      isHovered: false
    },
    {
      name: 'Escaping Earth',
      imgs: 'escaping-earth',
      filter: 'JavaScript',
      website: 'https://diana-asmus.developerakademie.net/Escaping%20Earth/index.html',
      github: 'https://github.com/dianaasmus/Escaping-Earth.git',
      content: 'In Escaping Earth, you control a character as they explore a world full of challenges and obstacles. A dynamic and interactive game that is easy for players of all ages to enjoy. Get ready to jump, run, and conquer levels in this thrilling adventure!',
      code: 'HTML | CSS | JavaScript OOP',
      isHovered: false
    }
  ];


  /**
   * An array containing filtered project information objects.
   */
  filteredProjects = this.projects.slice();


  /**
   * Filters projects by a specified code.
   * @param {string} filter - The code to filter projects by.
   */
  filterByCode(filter: string) {
    this.filteredProjects = this.projects.filter(project => project.filter === filter);
  }


  /**
   * Resets the project filter to display all projects.
   */
  resetFilter() {
    this.filteredProjects = this.projects.slice();
  }


  /**
   * Constructor for the `PortfolioComponent` class.
   * @param {ObserverService} observerService - The service for observing DOM elements.
   */
  constructor(private observerService: ObserverService) {
    this.updateIsHovered(); // Initialer Aufruf

    // Event-Listener für das Ändern der Fenstergröße
    window.addEventListener('resize', this.handleResize.bind(this));
  }


  /**
   * This method is called after the component's view has been initialized.
   * It sets up the observer for the project element.
   */
  ngAfterViewInit() {
    const elementToObserve = this.projectToObserve.nativeElement;
    this.observerService.observe(elementToObserve, this, 0.25);
  }


  /**
   * This method is called when the observed project container enters the viewport.
   * It triggers the fade-in animation.
   */
  containerInViewport() {
    this.fadeInAnimation = true;
  }
}