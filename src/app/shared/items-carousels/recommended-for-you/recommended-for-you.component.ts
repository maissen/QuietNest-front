import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

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

  // Called whenever @Input() properties change.
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && changes['data'].currentValue) {
      this.chunkData();
    }
  }

  // Splits the data array into chunks of 4 items each.
  private chunkData(): void {
    const chunkSize = 4;
    this.chunkedData = []; // Clear the previous chunks
    for (let i = 0; i < this.data.length; i += chunkSize) {
      this.chunkedData.push(this.data.slice(i, i + chunkSize));
    }
  }
}
