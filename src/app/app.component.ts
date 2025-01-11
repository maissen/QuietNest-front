import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CategoriesService } from './services/categories.service';
import { NarratorsService } from './services/narrators.service';
import { ScenesService } from './services/scenes.service';
import { SoundsService } from './services/sounds.service';

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
    private http: HttpClient,
    private categoriesService: CategoriesService,
    private narratorsService: NarratorsService,
    private scenesService: ScenesService,
    private soundsService: SoundsService
  ) { }

  ngOnInit() {
  
    this.checkIfUrlEndsWithApp();
  
    this.router.events.subscribe(() => {
      this.checkIfUrlEndsWithApp();
    });

    //! Fetch all categories
    this.http.get<any[]>(this.categoriesService.api_get_all_categories).subscribe(categories => {
      this.categoriesService.setAllCategories(categories);
    });

    //! Fetch al narrators
    this.http.get<any[]>(this.narratorsService.api_get_all_narrators).subscribe(categories => {
      this.narratorsService.setAllnarrators(categories);
    });

    //! Fetch al scenes
    this.http.get<any[]>(this.scenesService.api_get_all_scenes).subscribe(allScenes => {
      this.scenesService.setScenesList(allScenes);
    });
    
    //! Fetch all sounds and their categories
    this.http.get<any[]>(this.soundsService.apiGetAllSounds()).subscribe(sounds => {
      this.soundsService.setSounds(sounds);
      this.http.get<any[]>(this.soundsService.apiGetSoundsCategories()).subscribe(categories => {
        this.soundsService.setCategories(categories);
      });
    });
    
  
  }
  
  checkIfUrlEndsWithApp() {
    const currentUrl = this.router.url;
    this.showNavbar = currentUrl.startsWith('/app/');
  }
}
