import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ObserverService {
  private observers: Map<HTMLElement, IntersectionObserver> = new Map();
  // thresholdValue!: number;

  constructor() { }

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

  outOfViewportFunction(elementComponent: any) {
    return typeof elementComponent.containerOutOfViewport === 'function';
  }

  disconnect(element: HTMLElement) {
    const observer = this.observers.get(element);
    if (observer) {
      observer.disconnect();
      this.observers.delete(element);
    }
  }
}
