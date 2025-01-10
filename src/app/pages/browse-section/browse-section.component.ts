import { Component, OnInit, HostListener } from '@angular/core';
import { BrowseSectionService } from 'src/app/services/browse-section.service';

@Component({
  selector: 'app-browse-section',
  templateUrl: './browse-section.component.html',
  styleUrls: ['./browse-section.component.scss']
})
export class BrowseSectionComponent implements OnInit {

  audios: any[] = [];
  currentScene: any;
  bgColor: string = '';
  showSceneBtn: boolean = true;

  constructor(
    public service: BrowseSectionService
  ) { }

  ngOnInit(): void {
    this.updateLayout();
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
      this.bgColor = '';
      this.showSceneBtn = false;
    } else {
      this.bgColor = this.currentScene?.avgColor || '';
      this.showSceneBtn = true;
    }
  }
}
