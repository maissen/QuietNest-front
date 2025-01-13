import { Component, Input, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carousel-square',
  templateUrl: './carousel-square.component.html',
  styleUrls: ['./carousel-square.component.scss']
})
export class CarouselSquareComponent {
  @Input() speeches: any[] = [];
  @Input() hasBottomBorder: boolean = false;
  @Input() carouselTitle: string = '';
  @Input() hasScrollbar: boolean = false;
  @ViewChild('carouselContainer') carouselContainerRef!: ElementRef;

  scrollStep = 300;

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
