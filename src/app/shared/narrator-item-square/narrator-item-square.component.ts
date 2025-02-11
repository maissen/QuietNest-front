import { Component, Input, OnInit } from '@angular/core';
import { NarratorsService } from 'src/app/services/narrators.service';

@Component({
  selector: 'app-narrator-item-square',
  templateUrl: './narrator-item-square.component.html',
  styleUrls: ['./narrator-item-square.component.scss']
})
export class NarratorItemSquareComponent implements OnInit {

  @Input() narrator: any;
  number_of_speeches: number = 0;

  constructor(
    private narratorsService: NarratorsService
  ) {}
  
  ngOnInit(): void {
    this.narratorsService.getSpeechesNbr(this.narrator.id).subscribe(
      (response) => {
        if (response) {
          this.number_of_speeches = response;
        }
      },
      (error) => {
        console.error('Failed to load speeches count:');
      }
    );
  }

}
