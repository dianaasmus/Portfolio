import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.scss']
})
export class MobileNavComponent {
  @Input() openNavigaton!: boolean;

  /**
   * Hides the mobile navigation.
   */
  hideNav() {
    this.openNavigaton = false;
    const mobileNavContainer = document.getElementById('mobileNav');

    if (mobileNavContainer) {
      mobileNavContainer?.classList.add('hide-nav-animation');
      setTimeout(() => {
        mobileNavContainer?.classList.remove('open-nav-animation');
      }, 600);
    }
  }
}