import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgxScannerQrcodeComponent, NgxScannerQrcodeService, ScannerQRCodeConfig, ScannerQRCodeSelectedFiles } from 'ngx-scanner-qrcode';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login2-page',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.scss']
})
export class Login2Component implements OnInit {

  profileID: string = '';
  imageSrc: string = '';
  scanningValue: string = '';

  isCameraOpen: boolean = false;

  @ViewChild('camera', { static: false }) cameraScanner!: NgxScannerQrcodeComponent;

  constructor(
    private router: Router, 
    private user: UserService,
    private qrcode: NgxScannerQrcodeService
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

  setScanningValue(event: any) {
    this.profileID = event[0].value;
  }

  public onSelects(files: any) {
    this.qrcode.loadFiles(files).subscribe((res: ScannerQRCodeSelectedFiles[]) => {
      this.qrCodeResult = res;
      this.imageSrc = res[0].url;
    });
  }

  cameraScan(event: any) {
    this.profileID = event[0].value;
    this.cameraScanner.stop();
    this.isCameraOpen = false;
  }

  submitLogin(): void {
    if(this.profileID) {
      this.user.fetchUser(this.profileID).subscribe(
        (res) => {
          console.log(res);
          this.user.setUser(res);
          this.router.navigate(['/app']);
        },
        (err) => {
          alert('couldn\'t fetch user by id');
        }
      );
    }
  }

}
