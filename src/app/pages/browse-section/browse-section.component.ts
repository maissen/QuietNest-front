import { Component, OnInit, HostListener } from '@angular/core';
import { BrowseSectionService } from 'src/app/services/browse-section.service';
import { ScenesService } from 'src/app/services/scenes.service';

@Component({
  selector: 'app-browse-section',
  templateUrl: './browse-section.component.html',
  styleUrls: ['./browse-section.component.scss']
})
export class BrowseSectionComponent implements OnInit {

  showBgVideo: boolean = true;

  constructor(
    public service: BrowseSectionService,
    public scenesService: ScenesService
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
      this.showBgVideo = false;
    } else {
      this.showBgVideo = true;
    }
  }
}
