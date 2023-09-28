import { Injectable } from '@angular/core';
import { ContactMeComponent } from './contact-me/contact-me.component';

@Injectable({
  providedIn: 'root'
})

export class ObserverService {
  private observer: IntersectionObserver | undefined;
  private elementComponent: any;

  constructor() {
    this.initObserver();
  }

  private initObserver() {
    this.observer = new IntersectionObserver(entries => {
      // Hier können Sie die Callback-Logik implementieren
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Das beobachtete Element ist sichtbar
          this.elementComponent.containerInViewport();
          
        } else {
          // Das beobachtete Element ist nicht sichtbar
          this.elementComponent.containerOutOfViewport();
        }
      });
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    });
  }

  observe(element: HTMLElement, elementComponent: any) {
    if (this.observer) {
      this.elementComponent = elementComponent;
      this.observer.observe(element);
    }
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
