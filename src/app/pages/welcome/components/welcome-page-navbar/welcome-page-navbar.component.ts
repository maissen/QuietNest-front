import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-welcome-page-navbar',
  templateUrl: './welcome-page-navbar.component.html',
  styleUrls: ['./welcome-page-navbar.component.scss']
})
export class WelcomePageNavbarComponent {

  @Input() height: any;
  
  @HostListener('window:scroll', [])
  onScroll(): void {
    const nav = document.querySelector('nav');
    if (window.scrollY > this.height) {
      nav?.classList.add('scrolled');
    } else {
      nav?.classList.remove('scrolled');
    }
  }
}
