import { AfterViewInit, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-path',
  templateUrl: './path.component.html',
  styleUrls: ['./path.component.scss']
})
export class PathComponent implements AfterViewInit {

  private pathLength: number = 0;
  private path: SVGPathElement | null = null;

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit() {
    this.path = this.elementRef.nativeElement.querySelector('.cls-1'); // Ändere den Selektor auf den richtigen Wert
    if (this.path instanceof SVGPathElement) {
      this.pathLength = this.path.getTotalLength();
      this.animatePath();
    } else {
      console.error('Das ausgewählte Element ist kein SVG-Pfad');
    }
  }

  animatePath() {
    if (this.path) {
      this.path.setAttribute('stroke-dasharray', `${this.pathLength} ${this.pathLength}`);
      this.path.setAttribute('stroke-dashoffset', `${this.pathLength}`);

      window.addEventListener('scroll', () => {
        const scrollY = window.scrollY || window.pageYOffset;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercentage = scrollY / scrollHeight;

        const drawLength = this.pathLength * scrollPercentage;

        this.path?.setAttribute('stroke-dashoffset', `${this.pathLength - drawLength}`);
      });
    }
  }
}
