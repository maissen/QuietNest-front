import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
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

  @Input() narrator: any = null;
  action_like_narrator_loading: boolean = false;

  constructor(
    private user: UserService,
    public service: SpeechesService,
    private narratorsService: NarratorsService,
    private http: HttpClient,
    private router: Router
  ) {}

  likeNarrator(): void {
    const body = { narratorID: this.narrator.id, userID: this.user.getUser().id };
    this.action_like_narrator_loading = true;

    this.http.post<any>(this.narratorsService.api_user_likes_narrator, body).subscribe({
      next: (response) => {
        this.action_like_narrator_loading = false;
        if (this.narrator.liked) {
          this.narrator.likes = parseInt(this.narrator.likes) - 1;
        } else {
          this.narrator.likes = parseInt(this.narrator.likes) + 1;
        }

        this.narrator.liked = !this.narrator.liked;
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
