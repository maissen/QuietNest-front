import { Component, Input, AfterViewInit, ElementRef, ViewChild, HostListener, ChangeDetectorRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-rectangle',
  templateUrl: './carousel-rectangle.component.html',
  styleUrls: ['./carousel-rectangle.component.scss']
})
export class CarouselRectangleComponent {
  @Input() speeches: any[] = [];
  @Input() hasBottomBorder: boolean = false;
  @Input() carouselTitle: string = '';
  @Input() hasScrollbar: boolean = false;
  @ViewChild('carouselContainer') carouselContainerRef!: ElementRef;

  scrollStep = 300;

  constructor(private cdr: ChangeDetectorRef) {}

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
