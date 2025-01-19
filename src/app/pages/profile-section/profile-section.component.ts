import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QrcodeService } from 'src/app/services/qrcode.service';
import { SpeechesService } from 'src/app/services/speeches.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile-section',
  templateUrl: './profile-section.component.html',
  styleUrls: ['./profile-section.component.scss']
})
export class ProfileSectionComponent implements OnInit {

  qrCodeImage: string | null = null;

  constructor(
    public user: UserService,
    private router: Router,
    public speechesService: SpeechesService,
    private qrservice: QrcodeService
  ) {}

  ngOnInit(): void {
    this.generateQrCode();
  }

  private generateQrCode() {
    let text = this.user.getUser().id;
    this.qrservice.generateQrCode(text).subscribe({
      next: (response) => {
        this.qrCodeImage = response.qrCodeImage;
      },
      error: () => {
        alert('Failed to generate QR code');
      },
    });
  }

  clear() {
    this.user.clearUser();
    this.speechesService.clearSelectedSpeechData();
    this.router.navigate(['/login']).then(() => {
      window.location.reload();
    });
  }

  
}
