import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile-section',
  templateUrl: './profile-section.component.html',
  styleUrls: ['./profile-section.component.scss']
})
export class ProfileSectionComponent {

  constructor(
    public user: UserService,
    private router: Router
  ) {}

  clear() {
    this.user.clearUser();
    console.log('user is cleared')
    this.router.navigate(['/login'])
  }

}
