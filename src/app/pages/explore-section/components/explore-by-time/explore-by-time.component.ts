import { Component, ElementRef, ViewChild, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-explore-by-time',
  templateUrl: './explore-by-time.component.html',
  styleUrls: ['./explore-by-time.component.scss']
})
export class ExploreByTimeComponent implements AfterViewInit{
  @ViewChild('categoriesList') categoriesList!: ElementRef<HTMLUListElement>;

  canScrollLeft = false;
  canScrollRight = true;

  ngAfterViewInit() {
    this.updateScrollButtons();
    this.categoriesList.nativeElement.addEventListener('scroll', () => this.updateScrollButtons());
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
    this.canScrollLeft = element.scrollLeft > 0;
    this.canScrollRight = element.scrollLeft + element.clientWidth < element.scrollWidth;
  }
}
