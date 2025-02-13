import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgxScannerQrcodeComponent, NgxScannerQrcodeService, ScannerQRCodeConfig, ScannerQRCodeSelectedFiles } from 'ngx-scanner-qrcode';
import { ToastService } from 'src/app/services/toast.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  profileID: string = '';
  imageSrc: string = '';

  isCameraOpen: boolean = false;
  expand_user_salutation: boolean = false;
  is_loading: boolean = false;

  @ViewChild('camera', { static: false }) cameraScanner!: NgxScannerQrcodeComponent;

  public qrCodeResult: ScannerQRCodeSelectedFiles[] = [];
  public config: ScannerQRCodeConfig = {
    constraints: { 
      video: {}
    },
    isBeep: false
  };

  constructor(
    private router: Router, 
    public user: UserService,
    private qrcode: NgxScannerQrcodeService,
    private toast: ToastService
  ) {}

  async ngOnInit(): Promise<void> {
    if (this.user.getUser() !== null) {
      this.router.navigate(['/app']);
    }
  }

  //! Starts or stops the camera scanner
  startCamera() {
    if (this.cameraScanner.isStart) {
      this.cameraScanner.stop();
      this.isCameraOpen = false;
    } else {
      this.cameraScanner.start();
      this.isCameraOpen = true;
    }
  }
  
  //! set scanned value by qr image
  setScannedValue(event: any) {
    this.profileID = event[0].value;
    this.isCameraOpen = false;
    this.submitLogin();
  }

  //! Handles QR code scanning and sets the scanned value
  cameraScan(event: any) {
    if (event.length > 0) {
      this.profileID = event[0].value;
      this.cameraScanner.stop();
      this.isCameraOpen = false;
      this.submitLogin();
    }
  }

  //! Handles QR code image uploads
  public onSelects(files: any) {
    this.qrcode.loadFiles(files).subscribe((res: ScannerQRCodeSelectedFiles[]) => {
      this.qrCodeResult = res;
      this.imageSrc = res[0].url;
      this.isCameraOpen = false;
    });
  }

  //! Submits the login request
  submitLogin(): void {
    if (this.profileID) {
      this.is_loading = true;
      this.user.fetchUser(this.profileID).subscribe(
        (res) => {
          this.user.setUser(res);
          this.is_loading = false;
          this.expand_user_salutation = true;
  
          setTimeout(() => {
            this.router.navigate(['/app']);
          }, 5000);
        },
        (err) => {
          this.toast.showToast('Please verify your ID', 2, 'Log in failed');
          this.is_loading = false;
        }
      );
    } else {
      this.toast.showToast('Please enter your ID', 1, 'Log in failed');
    }
  }
}
