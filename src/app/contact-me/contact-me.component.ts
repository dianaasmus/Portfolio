import { Component, ElementRef, ViewChild } from '@angular/core';
import { ObserverService } from '../observer.service';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent {
  @ViewChild('contactMe') contactMeToObserve!: ElementRef;
  fadeInAnimation: boolean = false;

  constructor(private observerService: ObserverService) { }

  ngAfterViewInit() {
    const elementToObserve = this.contactMeToObserve.nativeElement;
    this.observerService.observe(elementToObserve, this, 0.10);
  }

  containerInViewport() {
    this.fadeInAnimation = true;
  }
}