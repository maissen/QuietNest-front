import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories.service';
import { NarratorsService } from 'src/app/services/narrators.service';
import { SoundsmixturesService } from 'src/app/services/soundsmixtures.service';
import { SpeechesService } from 'src/app/services/speeches.service';

@Component({
  selector: 'app-audio-item-square',
  templateUrl: './audio-item-square.component.html',
  styleUrls: ['./audio-item-square.component.scss']
})
export class AudioItemSquareComponent {
  @Input() soundMixture: any;
  
  constructor(
    public playingSpeechService: SpeechesService,
    public narratorsService: NarratorsService,
    public categoriesService: CategoriesService,
    private http: HttpClient,
    private service: SoundsmixturesService,
    private router: Router
  ) {}

  openMixture(mixture: any): void {
    const mixtureID = mixture.id;
    const body = { mixtureID }

    this.http.post<any>(this.service.api_play_soundsmixture, body).subscribe({
      next: (response) => {

        console.log(response)
        mixture.playing_nbr = parseInt(mixture.playing_nbr) + 1;
        this.router.navigate(['app/create'])
      },
      error: (err) => {
        console.error('Error:', err);
      }
    });

    this.service.playSoundMixture(this.soundMixture);
  }
}
