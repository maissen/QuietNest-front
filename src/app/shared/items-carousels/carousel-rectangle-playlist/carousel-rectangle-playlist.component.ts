import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carousel-rectangle-playlist',
  templateUrl: './carousel-rectangle-playlist.component.html',
  styleUrls: ['./carousel-rectangle-playlist.component.scss']
})
export class CarouselRectanglePlaylistComponent {
  @Input() playlists: any[] = [];
  @Input() hasBottomBorder: boolean = false;
  @Input() carouselTitle: string = '';
  @Input() hasScrollbar: boolean = false;
  @ViewChild('carouselContainer') carouselContainerRef!: ElementRef;

  scrollStep = 300;

  constructor() {}

  scrollCarousel(container: HTMLElement, direction: 'prev' | 'next') {
    const newScrollPosition =
      direction === 'next'
        ? container.scrollLeft + this.scrollStep
        : container.scrollLeft - this.scrollStep;

    container.scrollTo({
      left: newScrollPosition,
      behavior: 'smooth',
    });
  }
}
