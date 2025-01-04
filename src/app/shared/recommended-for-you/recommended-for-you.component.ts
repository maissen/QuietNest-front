import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recommended-for-you',
  templateUrl: './recommended-for-you.component.html',
  styleUrls: ['./recommended-for-you.component.scss']
})
export class RecommendedForYouComponent {
  @Input() title: string = '';
  @Input() data: any[] = [];
  @Input() hasBottomBorder: boolean = false;
  
}
