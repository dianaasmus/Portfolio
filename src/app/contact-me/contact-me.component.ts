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
  @ViewChild('emailField') emailField!: ElementRef;
  fadeInAnimation: boolean = false;
  emailsent: boolean = false;

  
  constructor(private observerService: ObserverService) { }


  /**
   * Initializes Observer observation after the component is displayed.
   */
  ngAfterViewInit() {
    const elementToObserve = this.contactMe.nativeElement;
    this.observerService.observe(elementToObserve, this, 0.5);
  }


  /**
   * Activates the fade-in animation when the container is in the viewport.
   */
  containerInViewport() {
    this.fadeInAnimation = true;
  }


  /**
   * Sends an email and disables input fields and send button.
   * @returns A promise indicating that the email has been sent.
   */
  async sendMail(): Promise<void> {
    const nameField = this.nameField.nativeElement;
    const messageField = this.messageField.nativeElement;
    const sendBtn = this.sendBtn.nativeElement;
    const emailField = this.emailField.nativeElement;

    // Disable input fields and send button
    this.disableFields([nameField, messageField, sendBtn, emailField]);

    try {
      const formData = this.createFormData(nameField.value, emailField.value, messageField.value);
      await this.sendFormData(formData);
    } catch (error) {
      console.error('Error sending data:', error);
    } finally {
      this.enableFields([nameField, messageField, sendBtn, emailField]);
      this.emptyFields([nameField, messageField, emailField]);
    }
  }


  /**
   * Creates a FormData object with the provided data.
   * @param name - The sender's name.
   * @param email - The sender's email address.
   * @param message - The message to be sent.
   * @returns A FormData object.
   */
  createFormData(name: string, email: string, message: string) {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);
    return formData;
  }


  /**
   * Sends the FormData object to the server.
   * @param formData - The FormData object to be sent.
   * @returns A promise indicating that the data has been sent.
   */
  async sendFormData(formData: FormData): Promise<void> {
    try {
      const response = await fetch('https://dianaasmus.com/send_mail.php', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error('Server reported an error');
      }
    } catch (error) {
      throw error;
    }
  }


  /**
   * Disables the specified fields.
   * @param fields - An array of HTML elements to be disabled.
   */
  disableFields(fields: (HTMLInputElement | HTMLButtonElement | HTMLTextAreaElement)[]): void {
    fields.forEach((field) => {
      field.disabled = true;
    });
  }


  /**
   * Enables the specified fields.
   * @param fields - An array of HTML elements to be enabled.
   */
  enableFields(fields: (HTMLInputElement | HTMLButtonElement | HTMLTextAreaElement)[]): void {
    fields.forEach((field) => {
      field.disabled = false;
    });
  }


  /**
   * Empties the specified input or textarea fields.
   * @param fields - An array of HTML input or textarea elements to be emptied.
   */
  emptyFields(fields: (HTMLInputElement | HTMLTextAreaElement)[]): void {
    fields.forEach((field) => {
      field.value = '';
    });
  }
}