import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { ScenesSectionService } from 'src/app/services/scenes-section.service';
import { CreateSectionLogicService } from 'src/app/services/create-section-logic.service';

@Component({
  selector: 'app-create-section',
  templateUrl: './create-section.component.html',
  styleUrls: ['./create-section.component.scss'],
})
export class CreateSectionComponent implements OnInit {
  @ViewChild('categoriesList') categoriesList!: ElementRef<HTMLUListElement>;

  activeCategories: any[] = [];
  currentScene: any;

  constructor(
    private scenesServices: ScenesSectionService,
    public logicService: CreateSectionLogicService
  ) {}

  ngOnInit(): void {
    this.scenesServices.getCurrentScene().subscribe(
      (scene) => {
        this.currentScene = scene;
      },
      (error) => {
        console.error('Error fetching current scene:', error);
      }
    );

    this.resetCategoryFilter();
  }

  toggleCategory(category: any): void {
    const index = this.activeCategories.indexOf(category);

    if (index === -1) {
      this.activeCategories.push(category);
      category.isActive = true;
    } else {
      this.activeCategories.splice(index, 1);
      category.isActive = false;
    }
  }

  resetCategoryFilter(): void {
    this.activeCategories = [];
    this.logicService.getAllCategories().forEach(category => {
      category.isActive = false;
    });
  }
}
