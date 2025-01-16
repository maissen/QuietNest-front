import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CategoriesService } from './services/categories.service';
import { NarratorsService } from './services/narrators.service';
import { ScenesService } from './services/scenes.service';
import { SoundsService } from './services/sounds.service';
import { PlaylistsService } from './services/playlists.service';
import { UserService } from './services/user.service';

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
    public scenesService: ScenesService,
    private soundsService: SoundsService,
    private playListsService: PlaylistsService,
    public user: UserService
  ) { }

  ngOnInit() {
  
    this.checkIfUrlEndsWithApp();
    
  
    this.router.events.subscribe(() => {
      this.checkIfUrlEndsWithApp();
    });

    //! Fetch all categories
    this.http.get<any[]>(this.categoriesService.api_get_all_categories).subscribe(categories => {
      this.categoriesService.setAllCategories(categories);
      // console.log(this.categoriesService.getAllCategories())
    });

    //! Fetch al narrators
    this.http.get<any[]>(this.narratorsService.api_get_all_narrators).subscribe(categories => {
      this.narratorsService.setAllnarrators(categories);
      // console.log(this.narratorsService.getAllNarrators());
    });

    //! Fetch al scenes
    this.http.get<any[]>(this.scenesService.api_get_all_scenes).subscribe(allScenes => {
      this.scenesService.setScenesList(allScenes);
      // console.log(this.scenesService.getScenesList());

      if (this.user.getUser() !== null) {
        const userSceneID = this.user.getUser().sceneID;
        const scene = this.scenesService.getSceneByID(userSceneID);
        console.log('user is found; his scene id : ' + this.user.getUser().sceneID);
        console.log('scene to set : ' + scene.id)
        if (scene) {
          this.scenesService.setActiveScene(scene);
        } 
        else {
          console.warn(`No scene found with ID: ${userSceneID}`);
        }
      }
    });

    //! Fetch al playlists
    this.http.get<any[]>(this.playListsService.api_all_playlists).subscribe(allPlaylists => {
      this.playListsService.setPlayLists(allPlaylists);
      console.log(this.playListsService.getPlaylists());
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
