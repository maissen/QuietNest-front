import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-welcome-page-contact',
  templateUrl: './welcome-page-contact.component.html',
  styleUrls: ['./welcome-page-contact.component.scss']
})
export class WelcomePageContactComponent {
  api_post_contact_message = "https://quietrest-back.onrender.com/api/post-contact-message";

  email: string = '';
  message: string = '';
  loading: boolean = false;
  errorMessage: string = '';

  constructor(
    private http: HttpClient,
    private toast: ToastService
  ) {}

  validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  sendMessage(): void {
    this.errorMessage = '';

    if (!this.validateEmail(this.email)) {
      this.toast.showToast('Please enter a valid email', 2, 'try again')
      return;
    }

    if (!this.message.trim()) {
      this.toast.showToast('Message cannot be empty', 2, 'try again')
      return;
    }

    this.loading = true;

    this.http.post(this.api_post_contact_message, { email: this.email, message: this.message }).subscribe({
      next: () => {
        this.loading = false;
        this.email = '';
        this.message = '';
        this.toast.showToast('Your message is submitted', 0, 'successfully')
      },
      error: (err) => {
        this.loading = false;
        this.errorMessage = "Failed to send message. Try again later.";
        console.error(err);
      }
    });
  }
}
