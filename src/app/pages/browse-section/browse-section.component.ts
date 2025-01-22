import { Component, HostListener } from '@angular/core';
import { BrowseSectionService } from 'src/app/services/browse-section.service';
import { NarratorsService } from 'src/app/services/narrators.service';
import { PlaylistsService } from 'src/app/services/playlists.service';
import { ScenesService } from 'src/app/services/scenes.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-browse-section',
  templateUrl: './browse-section.component.html',
  styleUrls: ['./browse-section.component.scss']
})
export class BrowseSectionComponent {
  showBgVideo: boolean = true;
  scaleFactor: number = 1;
  salutationMessage: string = '';

  constructor(
    public service: BrowseSectionService,
    public scenesService: ScenesService,
    public playlistsService: PlaylistsService,
    public user: UserService,
  ) {
    this.setSalutationMessage();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    const scrollPosition = window.scrollY;
    const maxScroll = 300;
    const scaleIncrease = 0.5;

    this.scaleFactor = 1 + (Math.min(scrollPosition, maxScroll) / maxScroll) * scaleIncrease;
  }

  private setSalutationMessage(): void {
    const currentHour = new Date().getHours();

    if (currentHour >= 6 && currentHour < 12) {
      this.salutationMessage = 'Good morning';
    } else if (currentHour >= 12 && currentHour < 18) {
      this.salutationMessage = 'Good afternoon';
    } else if (currentHour >= 18 && currentHour < 21) {
      this.salutationMessage = 'Good evening';
    } else {
      this.salutationMessage = 'Good night';
    }
  }
}
