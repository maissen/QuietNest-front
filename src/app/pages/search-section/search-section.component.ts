import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories.service';
import { NarratorsService } from 'src/app/services/narrators.service';
import { SpeechesService } from 'src/app/services/speeches.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-search-section',
  templateUrl: './search-section.component.html',
  styleUrls: ['./search-section.component.scss']
})
export class SearchSectionComponent implements OnInit {

  parameterType: string | null = null;
  parameterValue: string | null = null;
  api_speeches_of_narrator = 'http://localhost:2003/api/speeches-of-narrator';
  api_speeches_oplaylists_by_category = 'http://localhost:2003/api/speeches-playlists-by-category/';
  api_speeches_by_duration = 'http://localhost:2003/api/speeches-by-time/';

  data: any;
  narratorName: string = '';
  categoryName: string = '';
  duration: string = '';

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private http: HttpClient,
    public narrators: NarratorsService,
    public categories: CategoriesService,
    public speeches: SpeechesService,
    private user: UserService
  ) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {

      if (this.router.url.includes('/narrator')) {

        this.parameterType = 'narrator';
        this.parameterValue = params.get('narratorID');
        // this.http.get(`${this.api_speeches_of_narrator}/${this.parameterValue}/${this.user.getUser().id}`).subscribe(
        //   (res: any) => {
        //     this.data = res;
        //   },
        //   (err) => {
        //     console.log(err);
        //   }
        // );


        this.data = this.speeches.getAllSpeeches().filter(speech => speech.narratorID == this.parameterValue);
      
      } 
      else if (this.router.url.includes('/category')) {
      
        this.parameterType = 'category';
        this.parameterValue = params.get('categoryID');
        this.http.get(this.categories.api_get_all_categories).subscribe(
          (res: any) => {
            this.categories.setAllCategories(res);
          },
          (err) => {
            console.log(err);
          }
        );

        this.http.get(this.api_speeches_oplaylists_by_category + this.parameterValue).subscribe(
          (res: any) => {

            this.data = res;
            const category = this.categories.getAllCategories().find(category => category.id == this.parameterValue);
            
            if (category) {
              this.categoryName = category.name;
            } else {
              console.log('Category not found!');
            }
          
          },
          (err) => {
            console.log(err);
          }
        );
      
      } 
      else if (this.router.url.includes('/time')) {
      
        this.parameterType = 'time';
        this.parameterValue = params.get('timeID');

        this.http.get<any[]>(this.speeches.api_speeches_durations).subscribe(
          (res) => {
            this.speeches.speechesDurations = res;
            this.duration = this.speeches.speechesDurations.find(item => item.id == this.parameterValue).duration;
            this.http.get(this.api_speeches_by_duration + this.parameterValue).subscribe(
              (res: any) => {
                this.data = res;
                console.log(this.data)
              },
              (err) => {
                console.log(err);
              }
            );
          }
        )
        
      
      }
    });
  }
}
