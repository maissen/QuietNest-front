import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BottomSheetService } from './services/bottom-sheet.service';
import { HttpClient } from '@angular/common/http';
import { CategoriesService } from './services/categories.service';
import { NarratorsService } from './services/narrators.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'quietNest-front';
  showNavbar: boolean = false;
  isPlayingAudio: boolean = false;
  avgcolor: string = '';

  constructor(
    private router: Router,
    public bottomSheetService: BottomSheetService,
    private http: HttpClient,
    private categoriesService: CategoriesService,
    private narratorsService: NarratorsService
  ) { }

  ngOnInit() {
  
    this.checkIfUrlEndsWithApp();
  
    this.router.events.subscribe(() => {
      this.checkIfUrlEndsWithApp();
    });

    //! get all categories
    this.http.get<any[]>(this.categoriesService.api_get_all_categories).subscribe(categories => {
      this.categoriesService.setAllCategories(categories);
    });

    //! get al narrators
    this.http.get<any[]>(this.narratorsService.api_get_all_narrators).subscribe(categories => {
      this.narratorsService.setAllnarrators(categories);
    });
  
  }
  
  checkIfUrlEndsWithApp() {
    const currentUrl = this.router.url;
    this.showNavbar = currentUrl.startsWith('/app/');
  }
}
