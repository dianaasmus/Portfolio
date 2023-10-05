import { Component, ElementRef, ViewChild } from '@angular/core';
import { ObserverService } from '../observer.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  /**
   * The DOM element to be observed to detect its appearance in the viewport.
   */
  @ViewChild('aboutMe') aboutMeToObserve!: ElementRef;


  /**
   * A flag indicating whether the fade-in animation should be activated.
   */
  fadeInAnimation: boolean = false;


  /**
   * Constructor for the `AboutComponent` class.
   * @param {ObserverService} observerService - The service for observing DOM elements.
   */
  constructor(private observerService: ObserverService) { }


  /**
   * This method is called after the component's view has been initialized.
   * It registers the DOM element to be observed.
   */
  ngAfterViewInit() {
    const elementToObserve = this.aboutMeToObserve.nativeElement;
    this.observerService.observe(elementToObserve, this, 0.2);
  }


  /**
   * This method is called when the observed DOM element becomes visible
   * within the viewport. It activates the fade-in animation.
   */
  containerInViewport() {
    this.fadeInAnimation = true;
  }
}