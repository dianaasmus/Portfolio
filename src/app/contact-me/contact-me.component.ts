import { Component, ElementRef, ViewChild, Input } from '@angular/core';
import { ObserverService } from '../observer.service';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent {
  @ViewChild('contactMe') contactMeToObserve!: ElementRef;
  @Input() showArrow: boolean = false;
  private scrollNote!: HTMLElement | null;
  private scrollUp!: HTMLElement | null;

  constructor(private observerService: ObserverService) { }

  ngAfterViewInit() {
    const elementToObserve = this.contactMeToObserve.nativeElement;
    this.observerService.observe(elementToObserve, this);

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