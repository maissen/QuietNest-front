import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn-rectangle',
  templateUrl: './btn-rectangle.component.html',
  styleUrls: ['./btn-rectangle.component.scss']
})
export class BtnRectangleComponent {

  @Input() link: string = '/app';
  @Input() text: string = 'Button';
  @Input() icon: string = '';
  @Input() isRouter: boolean = true;

}
