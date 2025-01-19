import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories.service';
import { CreateSectionService } from 'src/app/services/create-section.service';
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
    private router: Router,
    private createSectionService: CreateSectionService
  ) {}

  openMixture(mixture: any): void {
    const mixtureID = mixture.id;
    const body = { mixtureID }

    this.http.post<any>(this.service.api_play_soundsmixture, body).subscribe({
      next: (response) => {

        // console.log(response)
        mixture.playing_nbr = parseInt(mixture.playing_nbr) + 1;
      },
      error: (err) => {
        console.error('Error:', err);
      }
    });

    this.router.navigate(['/app/create']);
    this.createSectionService.auto_sounds_play = true;
    let soundsIDs: any = [];
    mixture.sounds.forEach((sound: any) => {
      soundsIDs.push(sound.id)
    });
    this.createSectionService.auto_sounds_list = soundsIDs;
    // this.service.playSoundMixture(this.soundMixture);
  }
}
