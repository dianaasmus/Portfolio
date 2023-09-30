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

  async sendMail() {
    const nameField = this.nameField.nativeElement;
    const messageField = this.messageField.nativeElement;
    const sendBtn = this.sendBtn.nativeElement;
    
    nameField.disabled = true;
    messageField.disabled = true;
    sendBtn.disabled = true;

    //send (animation)
    let formData = new FormData();
    formData.append('name', nameField.value);
    formData.append('message', messageField.value);

    await fetch('https://dianaasmus.com/send_mail.php', {
      method: 'POST',
      body: formData
    })

    nameField.disabled = false;
    messageField.disabled = false;
    sendBtn.disabled = false;
  }
}