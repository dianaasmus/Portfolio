import { Component } from '@angular/core';

@Component({
  selector: 'app-fixed-items',
  templateUrl: './fixed-items.component.html',
  styleUrls: ['./fixed-items.component.scss']
})
export class FixedItemsComponent {
  /**
   * A flag indicating whether an arrow should be shown.
   */
  showArrow: boolean = false;

  
  /**
   * Opens the default email client with a pre-filled email address.
   */
  openMail() {
    window.location.href = 'mailto:mail@dianaasmus.com';
  }
}
