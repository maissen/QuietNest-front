import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carousel-square-narrators',
  templateUrl: './carousel-square-narrators.component.html',
  styleUrls: ['./carousel-square-narrators.component.scss']
})
export class CarouselSquareNarratorsComponent {

  @Input() narrators: any[] = [];
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
