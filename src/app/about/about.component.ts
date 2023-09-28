import { Component, ElementRef, ViewChild } from '@angular/core';
import { ObserverService } from '../observer.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  @ViewChild('aboutMe') aboutMeToObserve!: ElementRef;

  constructor(private observerService: ObserverService) { }

  ngAfterViewInit() {
    const elementToObserve = this.aboutMeToObserve.nativeElement;
    this.observerService.observe(elementToObserve, this);
  }

  containerInViewport() {
    console.log('about in'); 
  }

  containerOutOfViewport() {
    console.log('about out');
  }
}
