import { Component, ElementRef, ViewChild, AfterViewInit, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-explore-by-category',
  templateUrl: './explore-by-category.component.html',
  styleUrls: ['./explore-by-category.component.scss']
})
export class ExploreByCategoryComponent implements AfterViewInit{
  @ViewChild('categoriesList') categoriesList!: ElementRef<HTMLUListElement>;
  @Input() categories: any[] = [];

  ngAfterViewInit() {
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
  }
}
