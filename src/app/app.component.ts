import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BottomSheetService } from './services/bottom-sheet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'quietNest-front';
  showNavbar: boolean = false;
  isPlayingAudio: boolean = false;
  avgcolor: string = 'darkgreen';

  constructor(
    private router: Router,
    public bottomSheetService: BottomSheetService,
  ) {
    
  }

  ngOnInit() {
  
    this.checkIfUrlEndsWithApp();
  
    this.router.events.subscribe(() => {
      this.checkIfUrlEndsWithApp();
    });
  
  }
  
  checkIfUrlEndsWithApp() {
    const currentUrl = this.router.url;
    this.showNavbar = currentUrl.startsWith('/app/');
  }
}
