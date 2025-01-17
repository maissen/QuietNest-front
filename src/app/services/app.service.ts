import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from './categories.service';
import { NarratorsService } from './narrators.service';
import { ScenesService } from './scenes.service';
import { SoundsService } from './sounds.service';
import { PlaylistsService } from './playlists.service';
import { UserService } from './user.service';
import { SpeechesService } from './speeches.service';
import { SoundsmixturesService } from './soundsmixtures.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  isPlayingAudio: boolean = false;
  avgcolor: string = '';
  isLoaded: boolean = false;
  
  constructor(
    private http: HttpClient,
    private categoriesService: CategoriesService,
    private narratorsService: NarratorsService,
    public scenesService: ScenesService,
    private soundsService: SoundsService,
    private playListsService: PlaylistsService,
    public user: UserService,
    private speechesService: SpeechesService,
    private soundsmixturesService: SoundsmixturesService
  ) { }

  loadAllAppData() {

    console.log(this.user.getUser())
    console.log("data is loaded")

    //! Fetch al scenes
    this.http.get<any[]>(this.scenesService.api_get_all_scenes).subscribe(allScenes => {
      this.scenesService.setScenesList(allScenes);

      if (this.user.getUser() !== null) {
        const userSceneID = this.user.getUser().sceneID;
        const scene = this.scenesService.getSceneByID(userSceneID);
        if (scene) {
          this.scenesService.setActiveScene(scene);

          //! Fetch al narrators
          this.http.get<any[]>(`${this.narratorsService.api_get_all_narrators}/${this.user.getUser().id}`).subscribe(categories => {
            this.narratorsService.setAllnarrators(categories);

            //! Fetch all categories
            this.http.get<any[]>(this.categoriesService.api_get_all_categories).subscribe(categories => {
              this.categoriesService.setAllCategories(categories);

              //! Fetch all speeches 
              this.http.get<any[]>(`${this.speechesService.api_get_all_speeches}/${this.user.getUser().id}`).subscribe(speeches => {
                this.speechesService.setSpeeches(speeches);

                //! Fetch al playlists
                this.http.get<any[]>(`${this.playListsService.api_all_playlists}/${this.user.getUser().id}`).subscribe(allPlaylists => {
                  this.playListsService.setPlayLists(allPlaylists);

                  //! Fetch all sounds and their categories
                  this.http.get<any[]>(this.soundsService.apiGetAllSounds()).subscribe(sounds => {
                    this.soundsService.setSounds(sounds);
                    this.http.get<any[]>(this.soundsService.apiGetSoundsCategories()).subscribe(categories => {
                      this.soundsService.setCategories(categories);

                      //! Fetch all soundsmixtures and their sounds
                      this.http.get<any[]>(`${this.soundsmixturesService.api_get_all_soundsmixtures}/${this.user.getUser().id}`).subscribe(mixtures => {
                        this.soundsmixturesService.setSoundsMixtures(mixtures);
                      });
                    });
                  });
                });
              });
            });
          });
        } 
        else {
          console.warn(`No scene found with ID: ${userSceneID}`);
        }
      }
    });
  }
   
}
