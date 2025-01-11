import { Component, OnInit } from '@angular/core';
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
    } else {
      const index = this.activeCategories.indexOf(category);

      if (index === -1) {
        this.activeCategories.push(category);
      } else {
        this.activeCategories.splice(index, 1);
      }
    }
  }

  isCategoryActive(category: any): boolean {
    return this.activeCategories.length === 0 || this.activeCategories.includes(category);
  }

  getFilteredSounds(category: any): any[] {
    if (this.activeCategories.length === 0 || this.activeCategories.includes(category)) {
      return this.service.getSoundsOfCategory(category);
    }
    return [];
  }
  
}
