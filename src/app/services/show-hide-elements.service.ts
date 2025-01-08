import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ShowHideElementsService {

  screenWidth: number = window.innerWidth;

  constructor(
    private router: Router
  ) {
    this.initResizeListener();

    this.router.events.subscribe(() => {
      this.checkUrl();
    });
  }

  private initResizeListener(): void {
    window.addEventListener('resize', this.onResize);
  }

  private onResize = (): void => {
    this.screenWidth = window.innerWidth;
  }

  checkUrl(): any {
    return this.router.url;
  }

  showBottomSheetWide(): boolean {
    return this.screenWidth > 500 && this.checkUrl().startsWith('/app/create');
  }
  showBottomSheetsmall(): boolean {
    return this.screenWidth <= 500 && this.checkUrl().startsWith('/app/create');
  }
}
