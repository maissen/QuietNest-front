import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgxScannerQrcodeComponent, NgxScannerQrcodeService, ScannerQRCodeConfig, ScannerQRCodeSelectedFiles } from 'ngx-scanner-qrcode';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  profileID: string = '';
  imageSrc: string = '';
  scanningValue: string = '';

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
