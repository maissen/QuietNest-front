import { Component } from '@angular/core';

@Component({
  selector: 'app-audio-item-square',
  templateUrl: './audio-item-square.component.html',
  styleUrls: ['./audio-item-square.component.scss']
})
export class AudioItemSquareComponent {
  img_src: string = 'https://images.aeonmedia.co/images/4feda9d0-bdb6-464f-88e3-b70ae02578fe/essay-wood-cats-149626371.jpg?width=1200&quality=75&format=auto';
  img_alt: string = 'Cat';

  audio_title: string = "Stress and burnout support";
  audio_categories: string[] = ['calm', 'meditation'];
  audio_duration: number = 32;

  author: string = 'Matthew Brenher';
  
  isNew: boolean = true;
}
