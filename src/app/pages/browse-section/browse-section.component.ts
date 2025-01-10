import { Component, OnInit, HostListener } from '@angular/core';
import { BrowseSectionService } from 'src/app/services/browse-section.service';

@Component({
  selector: 'app-browse-section',
  templateUrl: './browse-section.component.html',
  styleUrls: ['./browse-section.component.scss']
})
export class BrowseSectionComponent implements OnInit {

  activeScene: any;
  showSceneBtn: boolean = true;
  

  constructor(
    public service: BrowseSectionService
  ) { }

  ngOnInit(): void {
    this.updateLayout();

    this.subscribeToActiveScene();
  }
  
  get allNarrators(): any[] {
    return this.service.getAllNarrators();
  }

  private subscribeToActiveScene(): void {
    this.service.getActiveScene().subscribe(scene => {
      this.activeScene = scene;
    });
  }

  @HostListener('window:resize', [])
  onResize(): void {
    this.updateLayout();
  }

  private getScreenWidth(): number {
    return window.innerWidth;
  }

  private updateLayout(): void {
    const screenWidth = this.getScreenWidth();
    if (screenWidth >= 500) {
      this.showSceneBtn = false;
    } else {
      this.showSceneBtn = true;
    }
  }
}
