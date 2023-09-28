import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ObserverService } from '../observer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @ViewChild('footer') footerToObserve!: ElementRef;
  @Input() showArrow: boolean = false;
  private scrollNote!: HTMLElement | null;
  private scrollUp!: HTMLElement | null;

  constructor(private observerService: ObserverService) { }

  ngAfterViewInit() {
    const elementToObserve = this.footerToObserve.nativeElement;
    this.observerService.observe(elementToObserve, this, 0.5);

    this.scrollNote = document.querySelector('.scroll-note');
    this.scrollUp = document.querySelector('.arrow-up');
  }

  containerInViewport() {
    if (this.scrollNote && this.scrollUp) {
      this.showArrow = true;
      this.hideElement(this.scrollNote);
      this.showElement(this.scrollUp);
    }
  }

  containerOutOfViewport() {
    if (this.scrollNote && this.scrollUp) {
      this.showArrow = false;
      this.hideElement(this.scrollUp);
      this.showElement(this.scrollNote);
    }
  }

  showElement(element: any) {
    element.classList.remove('d-none');
  }

  hideElement(element: any) {
    element.classList.add('d-none');
  }
}