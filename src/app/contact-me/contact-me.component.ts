import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
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
  @ViewChild('formContent') formContent!: any;
  fadeInAnimation: boolean = false;
  emailSent: boolean = false;


  constructor(private observerService: ObserverService, private renderer: Renderer2) { }


  /**
   * Initializes Observer observation after the component is displayed.
   */
  ngAfterViewInit() {
    const elementToObserve = this.contactMe.nativeElement;
    this.observerService.observe(elementToObserve, this, 0.2);
  }


  /**
   * Handle the event when the content of a textarea changes.
   * @param {Event} event - The input event triggered by the textarea.
   */
  textareaContentChanged(event: Event) {
    const textarea = event.target as HTMLTextAreaElement;
    const messageField = this.messageField.nativeElement;
    
    messageField.style.maxHeight = textarea.value.trim() !== '' ? '130px' : '20px';
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

    this.disableFields([nameField, messageField, sendBtn, emailField]);

    try {
      const formData = await this.createFormData(nameField.value, emailField.value, messageField.value);
      await this.sendFormData(formData);
    } catch (error) {
      console.error('Error sending data:', error);
    } finally {
      this.enableFields([nameField, messageField, sendBtn, emailField]);
      this.emptyFields([nameField, messageField, emailField]);
      this.sentMailFeedback();
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
      
      await fetch('https://dianaasmus.com/send_mail.php', {
        method: 'POST',
        body: formData
      });

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


  /**
   * Sets the emailSent flag to true and displays a success message in the form content.
   */
  sentMailFeedback(): void {
    this.emailSent = true;
    const formContent = document.getElementById('formContent');
    formContent!.innerHTML = '';
    formContent!.innerHTML = `
      <div>
        <p>Your email has been sent successfully!</p>
        <p>Thank you for contacting me.</p>
      </div>
    `;
  }
}