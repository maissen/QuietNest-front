import { Component, Input, AfterViewInit, ElementRef, ViewChild, HostListener, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-carousel-square',
  templateUrl: './carousel-square.component.html',
  styleUrls: ['./carousel-square.component.scss']
})
export class CarouselSquareComponent implements AfterViewInit {
  @Input() hasBottomBorder: boolean = false;
  @Input() carouselTitle: string = '';
  @ViewChild('carouselContainer') carouselContainerRef!: ElementRef;

  canScrollPrev = false;
  canScrollNext = false;
  scrollStep = 300;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    // Use setTimeout to avoid ExpressionChangedAfterItHasBeenCheckedError
    setTimeout(() => this.checkScrollButtons(this.carouselContainerRef.nativeElement));
  }

  scrollCarousel(container: HTMLElement, direction: 'prev' | 'next') {
    const newScrollPosition =
      direction === 'next'
        ? container.scrollLeft + this.scrollStep
        : container.scrollLeft - this.scrollStep;

    container.scrollTo({
      left: newScrollPosition,
      behavior: 'smooth',
    });

    // Recalculate button states after scrolling
    setTimeout(() => this.checkScrollButtons(container), 300); // Allow time for smooth scroll
  }

  @HostListener('window:resize')
  onWindowResize() {
    this.checkScrollButtons(this.carouselContainerRef.nativeElement);
  }

  checkScrollButtons(container: HTMLElement) {
    const totalScrollableWidth = container.scrollWidth - container.clientWidth;

    this.canScrollPrev = container.scrollLeft > 0;
    this.canScrollNext = container.scrollLeft < totalScrollableWidth;

    // Hide buttons if there is no scrollable content
    if (totalScrollableWidth <= 0) {
      this.canScrollPrev = false;
      this.canScrollNext = false;
    }

    // Trigger change detection to ensure UI updates
    this.cdr.detectChanges();
  }
}
