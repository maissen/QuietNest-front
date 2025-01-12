import { Component } from '@angular/core';
import { CreateSectionService } from 'src/app/services/create-section.service';

@Component({
  selector: 'app-create-section',
  templateUrl: './create-section.component.html',
  styleUrls: ['./create-section.component.scss'],
})
export class CreateSectionComponent {
  activeCategories: any[] = [];

  constructor(public service: CreateSectionService) {}

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
}
