import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NarratorsService } from 'src/app/services/narrators.service';
import { SpeechesService } from 'src/app/services/speeches.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-speech-section',
  templateUrl: './speech-section.component.html',
  styleUrls: ['./speech-section.component.scss']
})
export class SpeechSectionComponent implements OnInit {

  constructor(
    public service: SpeechesService,
    private router: Router,
    public narratorsService: NarratorsService,
    public user: UserService,
    public http: HttpClient
  ) {}

  ngOnInit(): void {
    if (!this.service.getSelectedSpeechData()) {
      this.router.navigate(['/app/browse']);
    }
  }

  likeNarrator(): void {
    let narrator = this.service.getSelectedSpeechData().narrator;
    const body = { narratorID: narrator.id, userID: this.user.getUser().id };

    this.http.post<any>(this.narratorsService.api_user_likes_narrator, body).subscribe({
      next: (response) => {

        console.log(response)
        if (narrator.liked) {
          narrator.likes = parseInt(narrator.likes) - 1 ;
        }
        else {
          narrator.likes = parseInt(narrator.likes) + 1 ;
        }
  
        narrator.liked = !narrator.liked;
        
      },
      error: (err) => {
        console.error('Error:', err);
      }
    });
  }

  onSeek(event: any): void {
    
    if(this.service.getSpeechDurationInSeconds() > 0) {
      let seekValue = event.target.value;
      this.service.html_audio.currentTime = seekValue;
    } 
  }

  stopSpeech(): void {
    this.service.clearSelectedSpeechData();
    this.router.navigate(['app/'])
  }

  showPlay_hideReplay(): boolean {
    return this.service.getSpeechReadingLevelInSeconds() < this.service.getSpeechDurationInSeconds();
  }


}
