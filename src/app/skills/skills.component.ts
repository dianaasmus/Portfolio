import { Component, ElementRef, ViewChild } from '@angular/core';
import { ObserverService } from '../observer.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  /**
   * An array containing data for displaying icons representing technical skills.
   */
  iconData = [
    { src: '../../assets/img/icons/html-icon.png', alt: 'HTML' },
    { src: '../../assets/img/icons/css-icon.png', alt: 'CSS' },
    { src: '../../assets/img/icons/javascript-icon.png', alt: 'JavaScript' },
    { src: '../../assets/img/icons/api-icon.png', alt: 'Rest API' },
    { src: '../../assets/img/icons/material-d-icon.png', alt: 'Material Design' },
    { src: '../../assets/img/icons/git-icon.png', alt: 'Git' },
    { src: '../../assets/img/icons/scrum-icon.png', alt: 'Scrum' },
    { src: '../../assets/img/icons/angular-icon.png', alt: 'Angular' },
    { src: '../../assets/img/icons/typescript-icon.png', alt: 'TypeScript' },
    { src: '../../assets/img/icons/firebase-icon.png', alt: 'Firebase' },
    { src: '../../assets/img/icons/wordpress-icon.png', alt: 'WordPress' },
  ];

  
  /**
   * Reference to the skills element to be observed.
   */
  @ViewChild('skills') skillsToObserve!: ElementRef;


  /**
   * A flag indicating whether to trigger a fade-in animation.
   */
  fadeInAnimation: boolean = false;


  /**
   * Constructor for the `SkillsComponent` class.
   * @param {ObserverService} observerService - The service for observing DOM elements.
   */
  constructor(private observerService: ObserverService) { }


  /**
   * This method is called after the component's view has been initialized.
   * It sets up the observer for the skills element.
   */
  ngAfterViewInit() {
    const elementToObserve = this.skillsToObserve.nativeElement;
    this.observerService.observe(elementToObserve, this, 0.2);
  }


  /**
   * This method is called when the observed skills container enters the viewport.
   * It triggers the fade-in animation.
   */
  containerInViewport() {
    this.fadeInAnimation = true;
  }
}