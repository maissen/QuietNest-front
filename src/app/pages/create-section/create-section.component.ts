import { Component, ElementRef, ViewChild, AfterViewInit, HostListener, OnInit, ChangeDetectorRef } from '@angular/core';
import { CreateSectionService } from 'src/app/services/create-section.service';
import { ScenesSectionService } from 'src/app/services/scenes-section.service';

@Component({
  selector: 'app-create-section',
  templateUrl: './create-section.component.html',
  styleUrls: ['./create-section.component.scss']
})
export class CreateSectionComponent implements AfterViewInit, OnInit {
  @ViewChild('categoriesList') categoriesList!: ElementRef<HTMLUListElement>;

  canScrollLeft = false;
  canScrollRight = true;
  categories: any[] = [];
  currentScene: any;

  constructor(
    private createSectionService: CreateSectionService,
    private cdr: ChangeDetectorRef,
    private scenesServices: ScenesSectionService
  ) {}

  ngOnInit(): void {

    this.scenesServices.getCurrentScene().subscribe(
      (scene) => {
        this.currentScene = scene;
        if (this.currentScene) {
          // console.log('create comp, Current scene:', this.currentScene.name);
        }
      },
      (error) => {
        console.error('Error fetching current scene:', error);
      }
    );

    this.fetchCategories();
  }

  fetchCategories() {
    this.createSectionService.getCategories().subscribe(
      (data) => {
        this.categories = data;
        console.log('Create section successfully fetched Data:', this.categories);
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
  }

  ngAfterViewInit() {
    this.updateScrollButtons();
    this.categoriesList.nativeElement.addEventListener('scroll', () => this.updateScrollButtons());

    // Manually trigger change detection after the view is initialized
    this.cdr.detectChanges();
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
