import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-startscreen',
  templateUrl: './startscreen.component.html',
  styleUrls: ['./startscreen.component.scss']
})
export class StartscreenComponent {
  @Input() showArrow: boolean = false;

  openMail() {
    window.location.href = "mailto:asmus.diana@icloud.com";
  }
}