import { Component } from '@angular/core';

@Component({
  selector: 'app-audio-item-rectangle',
  templateUrl: './audio-item-rectangle.component.html',
  styleUrls: ['./audio-item-rectangle.component.scss']
})
export class AudioItemRectangleComponent {
  img_src: string = 'https://images.squarespace-cdn.com/content/v1/607f89e638219e13eee71b1e/1684821560422-SD5V37BAG28BURTLIXUQ/michael-sum-LEpfefQf4rU-unsplash.jpg';
  img_alt: string = 'Cat';

  audio_title: string = "Stress and burnout support";
  audio_categories: string[] = ['calm', 'meditation'];
  audio_duration: number = 32;

  author: string = 'Matthew Brenher';
  
  isNew: boolean = true;
}
