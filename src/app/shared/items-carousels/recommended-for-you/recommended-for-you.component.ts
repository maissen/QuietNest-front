import { Component, Input, OnChanges, SimpleChanges, HostListener } from '@angular/core';

@Component({
  selector: 'app-recommended-for-you',
  templateUrl: './recommended-for-you.component.html',
  styleUrls: ['./recommended-for-you.component.scss']
})
export class RecommendedForYouComponent implements OnChanges {
  @Input() title: string = '';
  @Input() data: any[] = [];
  @Input() hasBottomBorder: boolean = false;

  chunkedData: any[][] = [];
  screenWidth: number = window.innerWidth;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && changes['data'].currentValue) {
      this.chunkData();
    }
  }

  private chunkData(): void {
    let chunkSize = 4;

    if (this.screenWidth >= 1500) {
      chunkSize = 6;
    } else {
      chunkSize = 4;
    }

    this.chunkedData = [];
    for (let i = 0; i < this.data.length; i += chunkSize) {
      this.chunkedData.push(this.data.slice(i, i + chunkSize));
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.screenWidth = window.innerWidth;
    this.chunkData();
  }
}
