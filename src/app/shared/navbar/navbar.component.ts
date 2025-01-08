import { Component } from '@angular/core';
import { ShowHideComponentsService } from 'src/app/services/show-hide-components.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(
    public showHideComponents: ShowHideComponentsService
  ) {}

}
