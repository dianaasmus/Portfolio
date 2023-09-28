import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ObserverService {
  private observers: Map<HTMLElement, IntersectionObserver> = new Map();

  constructor() {}

  observe(element: HTMLElement, elementComponent: any) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          elementComponent.containerInViewport();
        } else {
          elementComponent.containerOutOfViewport();
        }
      });
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    });

    observer.observe(element);
    this.observers.set(element, observer);
  }

  disconnect(element: HTMLElement) {
    const observer = this.observers.get(element);
    if (observer) {
      observer.disconnect();
      this.observers.delete(element);
    }
  }
}
