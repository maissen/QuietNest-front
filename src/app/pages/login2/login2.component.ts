import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgxScannerQrcodeComponent, NgxScannerQrcodeService, ScannerQRCodeConfig, ScannerQRCodeSelectedFiles } from 'ngx-scanner-qrcode';
import { ToastService } from 'src/app/services/toast.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login2-page',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.scss']
})
export class Login2Component implements OnInit {

  profileID: string = '';
  imageSrc: string = '';

  isCameraOpen: boolean = false;

  expand_user_salutation: boolean = false;

  @ViewChild('camera', { static: false }) cameraScanner!: NgxScannerQrcodeComponent;

  constructor(
    private router: Router, 
    public user: UserService,
    private qrcode: NgxScannerQrcodeService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    if (this.user.getUser() !== null) {
      this.router.navigate(['/app']);
    }
  }
  public qrCodeResult: ScannerQRCodeSelectedFiles[] = [];

  public config: ScannerQRCodeConfig = {
    constraints: { 
      video: {
        width: 0
      }
    } 
  };

  startCamera() {
    if(this.cameraScanner.isStart) {
      this.cameraScanner.stop();
      this.isCameraOpen = false;
    }
    else {
      this.cameraScanner.start();
      this.isCameraOpen = true;
    }
  }

  // set scanned value by qr image
  setScannedValue(event: any) {
    this.profileID = event[0].value;
    this.submitLogin();
  }

  // needed to scan uploaded qr codes
  public onSelects(files: any) {
    this.qrcode.loadFiles(files).subscribe((res: ScannerQRCodeSelectedFiles[]) => {
      this.qrCodeResult = res;
      this.imageSrc = res[0].url;
    });
  }

  // set scanned value by camera
  cameraScan(event: any) {
    this.profileID = event[0].value;
    this.cameraScanner.stop();
    this.isCameraOpen = false;
    this.submitLogin();
  }

  submitLogin(): void {
    if (this.profileID) {
      this.user.fetchUser(this.profileID).subscribe(
        (res) => {
          this.user.setUser(res);
          this.expand_user_salutation = true;
          this.toast.showToast('User authenticated', 0, 'Log in success');
  
          setTimeout(() => {
            this.router.navigate(['/app']);
          }, 5000);
        },
        (err) => {
          this.toast.showToast('Please verify your ID', 2, 'Log in failed');
        }
      );
    }
    else {
      this.toast.showToast('Please enter your ID', 1, 'Log in failed');
    }
  }  

}
