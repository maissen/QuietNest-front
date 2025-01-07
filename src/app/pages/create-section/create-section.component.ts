import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { CreateSectionService } from 'src/app/services/create-section.service';
import { ScenesSectionService } from 'src/app/services/scenes-section.service';
import { CreateSectionLogicService } from 'src/app/services/create-section-logic.service';

@Component({
  selector: 'app-create-section',
  templateUrl: './create-section.component.html',
  styleUrls: ['./create-section.component.scss'],
})
export class CreateSectionComponent implements OnInit {
  @ViewChild('categoriesList') categoriesList!: ElementRef<HTMLUListElement>;

  categories: any[] = [];
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

    this.logicService.getCategoriesFromApi();
  }

}
