import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ObserverService } from '../observer.service';

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

  /**
   * A flag indicating whether a mockup is clicked.
   */
  clickedMockup: boolean = false;


  /**
   * An array containing project information objects.
   */
  projects = [
    {
      name: 'Join',
      imgName: 'join',
      filter: 'JavaScript',
      website: 'https://join.dianaasmus.com/index.html',
      gitHub: 'https://github.com/dianaasmus/Join-new.git',
      content: 'Join is a powerful Kanban project management tool that helps teams efficiently organize and manage their projects. With a user-friendly interface and a variety of features, Join provides an intuitive platform for collaboration and task progress.',
      code: 'HTML | CSS | JavaScript | Group project',
      isHovered: false
    },
    {
      name: 'Escaping Earth',
      imgName: 'escaping-earth',
      filter: 'JavaScript',
      website: 'https://escaping-earth.dianaasmus.com/index.html',
      gitHub: 'https://github.com/dianaasmus/Escaping-Earth.git',
      content: 'In Escaping Earth, you control a character as they explore a world full of challenges and obstacles. A dynamic and interactive game that is easy for players of all ages to enjoy.',
      code: 'HTML | CSS | JavaScript OOP',
      isHovered: false
    },
    {
      name: 'Simple CRM',
      imgName: 'simple-crm',
      filter: 'Angular',
      website: 'https://crm.dianaasmus.com',
      gitHub: 'https://github.com/dianaasmus/CRM.git',
      content: "The ,Simple CRM' provides businesses with a user-friendly platform to effortlessly create and manage customers while gaining detailed insights into their business performance. It enables a clear statistical function to capture relevant metrics and maintains an overview of each transaction through the integration of purchase management.",
      code: 'HTML | CSS | Firebase | Angular',
      isHovered: false
    }
  ];


  /**
  * An array containing filtered project information objects.
  */
  filteredProjects = this.projects.slice();


  /**
   * Handles the click event for a project card.
   * @param {number} index - The index of the project card in the list.
   */
  clickedProject(index: number) {
    if (this.clickedMockup == false && this.isDektopOrTablet()) {
      this.onMouseOver(index);
    } else if (this.isDektopOrTablet()) {
      this.onMouseOut(index);
    }
  }


  /**
   * Handles the mouse over event for a project card.
   * @param {number} index - The index of the project card in the list.
   */
  onMouseOver(i: number) {
    this.filteredProjects[i].isHovered = true;
    this.clickedMockup = true;
  }


  /**
   * Handles the mouse out event for a project card.
   * @param {number} index - The index of the project card in the list.
   */
  onMouseOut(i: number) {
    this.filteredProjects[i].isHovered = false;
    this.clickedMockup = false;
  }


  /**
   * Checks if the screen width is greater than or equal to 700px.
   * @returns {boolean} - True if the screen width is greater than or equal to 700px, false otherwise.
   */
  isDektopOrTablet() {
    return window.matchMedia('(min-width: 700px)').matches;
  }


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
  constructor(private observerService: ObserverService) { }


  /**
   * This method is called after the component's view has been initialized.
   * It sets up the observer for the project element.
   */
  ngAfterViewInit() {
    const elementToObserve = this.projectToObserve.nativeElement;
    this.observerService.observe(elementToObserve, this, 0.2);
  }


  /**
   * This method is called when the observed project container enters the viewport.
   * It triggers the fade-in animation.
   */
  containerInViewport() {
    this.fadeInAnimation = true;
  }
}