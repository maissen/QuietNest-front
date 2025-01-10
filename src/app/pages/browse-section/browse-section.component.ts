import { Component, OnInit, HostListener } from '@angular/core';
import { AudioService } from 'src/app/services/audio.service';
import { BrowseSectionService } from 'src/app/services/browse-section.service';
import { ScenesSectionService } from 'src/app/services/scenes-section.service';

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
    private audioService: AudioService,
    private scenesService: ScenesSectionService,
    private service: BrowseSectionService
  ) { }

  ngOnInit(): void {
    this.audioService.getAudioData().subscribe(data => {
      if (data) this.audios = data;
    });

    this.scenesService.getCurrentScene().subscribe(currentScene => {
      if (currentScene) {
        this.currentScene = currentScene;
        if (this.getScreenWidth() < 500) {
          this.bgColor = this.currentScene.avgColor;
        }
        // console.log('browse comp, current scene:', currentScene.avgColor);
      } else {
        // console.log('browse comp, current scene is undefined');
      }
    });

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
