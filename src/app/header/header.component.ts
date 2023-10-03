import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public openNavigaton: boolean = false;

  /**
   * Shows the mobile navigation with an animation.
   */
  showNav() {
    this.openNavigaton = true;
    const mobileNavContainer = document.getElementById('mobileNav');

    if (mobileNavContainer) {
      mobileNavContainer?.classList.add('open-nav-animation');
      setTimeout(() => {
        mobileNavContainer?.classList.remove('hide-nav-animation');
      }, 600);
    }
  }
}