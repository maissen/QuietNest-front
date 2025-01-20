import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpeechesService } from 'src/app/services/speeches.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile-section',
  templateUrl: './profile-section.component.html',
  styleUrls: ['./profile-section.component.scss']
})
export class ProfileSectionComponent {

  qrCodeImage: string | null = null;

  constructor(
    public user: UserService,
    private router: Router,
    public speechesService: SpeechesService,
  ) {}

  clear() {
    this.user.clearUser();
    this.speechesService.clearSelectedSpeechData();
    this.router.navigate(['/login']).then(() => {
      window.location.reload();
    });
  }

  
}
