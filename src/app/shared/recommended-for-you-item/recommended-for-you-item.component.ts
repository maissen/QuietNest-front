import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recommended-for-you-item',
  templateUrl: './recommended-for-you-item.component.html',
  styleUrls: ['./recommended-for-you-item.component.scss']
})
export class RecommendedForYouItemComponent {
  @Input() data: {
    imgSrc: string;
    name: string;
    likes: number;
    categories: string[];
  }  = {
    imgSrc: 'https://st3.depositphotos.com/18630962/31856/i/450/depositphotos_318568256-stock-photo-huai-mae-kamin-waterfall-srinakarin.jpg',
    name: 'Amazing Water Fall in fall season',
    likes: 120,
    categories: ['Nature', 'Photography', 'Travel']
  };
};
