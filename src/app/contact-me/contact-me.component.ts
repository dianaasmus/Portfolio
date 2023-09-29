import { Component, ElementRef, ViewChild } from '@angular/core';
import { ObserverService } from '../observer.service';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent {
  @ViewChild('contactMe') contactMe!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendBtn') sendBtn!: ElementRef;
  fadeInAnimation: boolean = false;

  constructor(private observerService: ObserverService) { }

  ngAfterViewInit() {
    const elementToObserve = this.contactMe.nativeElement;
    this.observerService.observe(elementToObserve, this, 0.5);
  }

  containerInViewport() {
    this.fadeInAnimation = true;
  }

  sendMail() {
    const nameField = this.nameField.nativeElement;
    const messageField = this.messageField.nativeElement;
    const sendBtn = this.sendBtn.nativeElement;
    // action="https://dianaasmus.com/send_mail.php"
    console.log('sending', this.contactMe);
    nameField.disabled = true;
    messageField.disabled = true;
    sendBtn.disabled = true;
  }
}