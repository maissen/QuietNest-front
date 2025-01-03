import { Component, Input, AfterViewInit, ElementRef, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-carousel-square',
  templateUrl: './carousel-square.component.html',
  styleUrls: ['./carousel-square.component.scss']
})
export class CarouselSquareComponent {
  @Input() style: number = 1;
    @ViewChild('carouselContainer') carouselContainerRef!: ElementRef;
  
    carouselTitle: string = 'my carousel';
  
    canScrollPrev = false;
    canScrollNext = false;
    scrollStep = 300;
  
    ngAfterViewInit() {
      this.checkScrollButtons(this.carouselContainerRef.nativeElement);
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
  
      // Update button states based on scroll position and content
      this.canScrollPrev = container.scrollLeft > 0;
      this.canScrollNext = container.scrollLeft < totalScrollableWidth;
  
      // Hide buttons if there is no scrollable content
      if (totalScrollableWidth <= 0) {
        this.canScrollPrev = false;
        this.canScrollNext = false;
      }
    }
}
