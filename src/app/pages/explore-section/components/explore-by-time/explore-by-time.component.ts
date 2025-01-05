import { Component, ElementRef, ViewChild, AfterViewInit, HostListener, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-explore-by-time',
  templateUrl: './explore-by-time.component.html',
  styleUrls: ['./explore-by-time.component.scss']
})
export class ExploreByTimeComponent implements AfterViewInit {
  @ViewChild('categoriesList') categoriesList!: ElementRef<HTMLUListElement>;

  canScrollLeft = false;
  canScrollRight = true;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.updateScrollButtons();
    this.categoriesList.nativeElement.addEventListener('scroll', () => {
      this.updateScrollButtons();
    });
  }

  @HostListener('window:resize')
  onResize() {
    this.updateScrollButtons();
  }

  scrollLeft() {
    this.categoriesList.nativeElement.scrollBy({
      left: -200,
      behavior: 'smooth',
    });
    this.updateScrollButtons();
  }

  scrollRight() {
    this.categoriesList.nativeElement.scrollBy({
      left: 200,
      behavior: 'smooth',
    });
    this.updateScrollButtons();
  }

  updateScrollButtons() {
    const element = this.categoriesList.nativeElement;
    const prevCanScrollLeft = this.canScrollLeft;
    const prevCanScrollRight = this.canScrollRight;

    this.canScrollLeft = element.scrollLeft > 0;
    this.canScrollRight = element.scrollLeft + element.clientWidth < element.scrollWidth;

    // If the values have changed, trigger change detection
    if (prevCanScrollLeft !== this.canScrollLeft || prevCanScrollRight !== this.canScrollRight) {
      this.cdr.detectChanges();  // Manually trigger change detection
    }
  }
}
