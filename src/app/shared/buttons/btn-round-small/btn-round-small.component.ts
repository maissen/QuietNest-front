import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn-round-small',
  templateUrl: './btn-round-small.component.html',
  styleUrls: ['./btn-round-small.component.scss']
})
export class BtnRoundSmallComponent {

  @Input() icon: string = '';

}
