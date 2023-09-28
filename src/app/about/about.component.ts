import { Component, ElementRef, ViewChild } from '@angular/core';
import { ObserverService } from '../observer.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  @ViewChild('aboutMe') aboutMeToObserve!: ElementRef;
  fadeInAnimation: boolean = false;

  constructor(private observerService: ObserverService) { }

  ngAfterViewInit() {
    const elementToObserve = this.aboutMeToObserve.nativeElement;
    this.observerService.observe(elementToObserve, this, 0.10);
  }

  containerInViewport() {
    this.fadeInAnimation = true;
  }
}
