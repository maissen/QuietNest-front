import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { CreateSectionService } from 'src/app/services/create-section.service';

@Component({
  selector: 'app-create-section',
  templateUrl: './create-section.component.html',
  styleUrls: ['./create-section.component.scss'],
})
export class CreateSectionComponent implements OnInit {

  constructor(
    public service: CreateSectionService
  ) {}

  ngOnInit(): void {

    // this.resetCategoryFilter();
  }

  // toggleCategory(category: any): void {
  //   const index = this.activeCategories.indexOf(category);

  //   if (index === -1) {
  //     this.activeCategories.push(category);
  //     category.isActive = true;
  //   } else {
  //     this.activeCategories.splice(index, 1);
  //     category.isActive = false;
  //   }
  // }

  // resetCategoryFilter(): void {
  //   this.activeCategories = [];
  //   this.logicService.getAllCategories().forEach(category => {
  //     category.isActive = false;
  //   });
  // }
}
