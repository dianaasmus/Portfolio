import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ObserverService {
  /**
   * A map to store observers associated with specific elements.
   */
  private observers: Map<HTMLElement, IntersectionObserver> = new Map();


  /**
   * Observes a specified element in the DOM and triggers containerInViewport or containerOutOfViewport functions
   * of the associated component when the element enters or exits the viewport.
   * @param {HTMLElement} element - The DOM element to observe.
   * @param {any} elementComponent - The component associated with the element.
   * @param {number} thresholdValue - The threshold value for triggering the intersection.
   */
  observe(element: HTMLElement, elementComponent: any, thresholdValue: number) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          elementComponent.containerInViewport();
        } else {
          if (this.outOfViewportFunction(elementComponent)!) {
            elementComponent.containerOutOfViewport();
          }
        }
      });
    }, {
      root: null,
      rootMargin: '0px',
      threshold: thresholdValue,
    });

    observer.observe(element);
    this.observers.set(element, observer);
  }


  /**
   * Checks if the containerOutOfViewport function exists in the component.
   * @param {any} elementComponent - The component to check.
   * @returns {boolean} - True if the function exists, false otherwise.
   */
  outOfViewportFunction(elementComponent: any): boolean {
    return typeof elementComponent.containerOutOfViewport === 'function';
  }


  /**
   * Disconnects the observer associated with a specific element.
   * @param {HTMLElement} element - The DOM element to disconnect the observer from.
   */
  disconnect(element: HTMLElement) {
    const observer = this.observers.get(element);
    if (observer) {
      observer.disconnect();
      this.observers.delete(element);
    }
  }
}