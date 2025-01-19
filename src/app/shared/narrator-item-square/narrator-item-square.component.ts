import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-narrator-item-square',
  templateUrl: './narrator-item-square.component.html',
  styleUrls: ['./narrator-item-square.component.scss']
})
export class NarratorItemSquareComponent {

  @Input() narrator: any;

}
