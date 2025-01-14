import { Component, HostListener } from '@angular/core';
import { BrowseSectionService } from 'src/app/services/browse-section.service';
import { PlaylistsService } from 'src/app/services/playlists.service';
import { ScenesService } from 'src/app/services/scenes.service';

@Component({
  selector: 'app-browse-section',
  templateUrl: './browse-section.component.html',
  styleUrls: ['./browse-section.component.scss']
})
export class BrowseSectionComponent {
  showBgVideo: boolean = true;
  scaleFactor: number = 1;

  constructor(
    public service: BrowseSectionService,
    public scenesService: ScenesService,
    public playlistsService: PlaylistsService
  ) {}

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const scrollPosition = window.scrollY;
    const maxScroll = 300;
    const scaleIncrease = 0.5;

    this.scaleFactor = 1 + (Math.min(scrollPosition, maxScroll) / maxScroll) * scaleIncrease;
  }
}
