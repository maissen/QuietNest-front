import { Component, ElementRef, ViewChild } from '@angular/core';
import { CreateSectionService } from 'src/app/services/create-section.service';
import { SoundsService } from 'src/app/services/sounds.service';

@Component({
  selector: 'app-create-section',
  templateUrl: './create-section.component.html',
  styleUrls: ['./create-section.component.scss'],
})
export class CreateSectionComponent {
  @ViewChild('categoriesList', { static: true }) categoriesList!: ElementRef;
  activeCategories: any[] = [];

  constructor(
    public service: CreateSectionService,
    public soundsService: SoundsService,
  ) {}

  toggleCategory(category: any): void {
    if (category === 'All') {
      this.activeCategories = [];
    } else if (category === 'active-sounds') {
      this.activeCategories = ['active-sounds'];
    } else {
      if (this.activeCategories.includes('active-sounds')) {
        this.activeCategories = [];
      }

      const index = this.activeCategories.indexOf(category);
      if (index === -1) {
        this.activeCategories.push(category);
      } else {
        this.activeCategories.splice(index, 1);
      }
    }
  }

  isCategoryActive(category: any): boolean {
    return (
      this.activeCategories.length === 0 ||
      this.activeCategories.includes(category)
    );
  }

  scrollCategoriesList(direction: 'left' | 'right'): void {
    const scrollStep = 150;
    const scrollContainer = this.categoriesList.nativeElement;
    const scrollAmount = direction === 'right' ? scrollStep : -scrollStep;
    scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
}
