import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn-round',
  templateUrl: './btn-round.component.html',
  styleUrls: ['./btn-round.component.scss']
})
export class BtnRoundComponent {

  @Input() routerLink: string = '/app';
  @Input() icon: string = '';

}
