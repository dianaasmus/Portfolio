import { Component, ElementRef, Renderer2, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent {
  @ViewChild('elementToObserve') elementToObserve!: ElementRef;
  private observer: any = IntersectionObserver;
  @Input() showArrow: boolean = false;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.observer = new IntersectionObserver(this.callback.bind(this), {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    });

    this.observer.observe(this.elementToObserve.nativeElement);
  }

  callback(entries: IntersectionObserverEntry[]) {
    const scrollNote = document.querySelector('.scroll-note');
    const scrollUp = document.querySelector('.arrow-up');

    entries.forEach(entry => {
      if (entry.isIntersecting) {
        scrollNote?.classList.add('d-none');
        scrollUp?.classList.remove('d-none');
        this.showArrow = true;
      } else {
        this.showArrow = false;
        scrollNote?.classList.remove('d-none');
        scrollUp?.classList.add('d-none');
      }
    });
  }

  ngOnDestroy() {
    this.observer.disconnect();
  }
}