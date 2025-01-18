import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NarratorsService } from 'src/app/services/narrators.service';
import { SpeechesService } from 'src/app/services/speeches.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-narrator-profile',
  templateUrl: './narrator-profile.component.html',
  styleUrls: ['./narrator-profile.component.scss']
})
export class NarratorProfileComponent {

  constructor(
    private user: UserService,
    public service: SpeechesService,
    private narratorsService: NarratorsService,
    private http: HttpClient,
    private router: Router // Injecting the Router
  ) {}

  likeNarrator(): void {
    let narrator = this.service.getSelectedSpeechData().narrator;
    const body = { narratorID: narrator.id, userID: this.user.getUser().id };

    this.http.post<any>(this.narratorsService.api_user_likes_narrator, body).subscribe({
      next: (response) => {
        console.log(response);
        if (narrator.liked) {
          narrator.likes = parseInt(narrator.likes) - 1;
        } else {
          narrator.likes = parseInt(narrator.likes) + 1;
        }

        narrator.liked = !narrator.liked;
      },
      error: (err) => {
        console.error('Error:', err);
      }
    });
  }

  isPlaylistRoute(): boolean {
    return this.router.url.startsWith('/app/playlist');
  }
}
