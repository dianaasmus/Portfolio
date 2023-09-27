import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fixed-items',
  templateUrl: './fixed-items.component.html',
  styleUrls: ['./fixed-items.component.scss']
})
export class FixedItemsComponent {
  @Input() showArrow: boolean = false;

  openMail() {
    window.location.href = "mailto:asmus.diana@icloud.com";
  }
}
