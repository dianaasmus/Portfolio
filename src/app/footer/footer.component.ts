import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ObserverService } from '../observer.service';

/**
 * The `FooterComponent` is responsible for displaying the footer of the application.
 * It observes a specific DOM element and handles the visibility of an arrow and a scroll note.
 */
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  /**
   * A flag indicating whether to show an arrow in the footer.
   */
  @Input() showArrow: boolean = false;


  /**
   * Reference to the footer element to be observed.
   */
  @ViewChild('footer') footerToObserve!: ElementRef;


  private scrollNote!: HTMLElement | null;
  private scrollUp!: HTMLElement | null;


  /**
   * Constructor for the `FooterComponent` class.
   * @param {ObserverService} observerService - The service for observing DOM elements.
   */
  constructor(private observerService: ObserverService) { }


  /**
   * This method is called after the component's view has been initialized.
   * It sets up the observer for the footer element and initializes scroll-related elements.
   */
  ngAfterViewInit() {
    const elementToObserve = this.footerToObserve.nativeElement;
    this.observerService.observe(elementToObserve, this, 0.5);

    this.scrollNote = document.querySelector('.scroll-note');
    this.scrollUp = document.querySelector('.arrow-up');
  }


  /**
   * This method is called when the observed footer container enters the viewport.
   * It shows the arrow and hides the scroll note.
   */
  containerInViewport() {
    if (this.scrollNote && this.scrollUp) {
      this.showArrow = true;
      this.hideElement(this.scrollNote);
      this.showElement(this.scrollUp);
    }
  }


  /**
   * This method is called when the observed footer container exits the viewport.
   * It hides the arrow and shows the scroll note.
   */
  containerOutOfViewport() {
    if (this.scrollNote && this.scrollUp) {
      this.showArrow = false;
      this.hideElement(this.scrollUp);
      this.showElement(this.scrollNote);
    }
  }


  /**
   * Shows the specified element by removing the 'd-none' class.
   * @param {HTMLElement} element - The element to show.
   */
  showElement(element: HTMLElement) {
    element.classList.remove('d-none');
  }


  /**
   * Hides the specified element by adding the 'd-none' class.
   * @param {HTMLElement} element - The element to hide.
   */
  hideElement(element: HTMLElement) {
    element.classList.add('d-none');
  }
}