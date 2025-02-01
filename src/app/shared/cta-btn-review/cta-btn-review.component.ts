import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ToastService } from 'src/app/services/toast.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-cta-btn-review',
  templateUrl: './cta-btn-review.component.html',
  styleUrls: ['./cta-btn-review.component.scss']
})
export class CtaBtnReviewComponent {

  constructor(
    private http: HttpClient,
    public user: UserService,
    public toast: ToastService
  ) {}

  message: string = '';
  messageLength: number = 0;
  stars = ['fa-solid', 'fa-solid', 'fa-solid', 'fa-solid', 'fa-solid'];
  selectedStars: number = 0;
  expandBody: boolean = false;

  toggleBody(): void {
    if(this.user.getUser().hasFeedback === 0) {
      this.expandBody = !this.expandBody;
    }
  }

  setStars(star: number): void {
    this.selectedStars = star;
  }

  checkMessageLength(event: KeyboardEvent): void {
    if (this.message.length >= 1000 && event.key !== 'Backspace' && event.key !== 'Delete') {
      event.preventDefault();
    }
  }

  api_post_feedback = 'https://quietrest-back.onrender.com/api/post-feedback';

  submitFeedback(): void {
    const userID = this.user.getUser().id;
    const stars = this.selectedStars || 0;
    const message = this.message.slice(0, 1001);

    const body = { userID, stars, message }
    this.http.post(this.api_post_feedback, body).subscribe(
      (res) => {
        console.log(res);
        this.user.addUserAttribute('hasFeedback', true)
        this.toast.showToast('messagek wsolni <3', 0, 'Message sent', 5000);
      },
      (err) => {
        console.log(err);
      }
    )
  }
}
