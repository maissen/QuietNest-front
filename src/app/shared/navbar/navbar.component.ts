import { Component } from '@angular/core';
import { ShowHideElementsService } from 'src/app/services/show-hide-elements.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(
    public showItems: ShowHideElementsService
  ) {}

}
