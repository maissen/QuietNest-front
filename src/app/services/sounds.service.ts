import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SoundsService {

  private api_get_sounds_categories = 'http://localhost:2003/api/create-section/categories';
  private api_get_all_sounds = 'http://localhost:2003/api/get-all-sounds';
  
  private categoriesAndSounds: any[] = [];
  private allSounds: any[] = [];

  constructor(private http: HttpClient) {
    this.fetchSoundCategories();
    this.setCategoriesAndSounds();
  }

  private fetchSoundCategories(): void {
    this.http.get<any[]>(this.api_get_sounds_categories)
      .pipe(
        map(data => data || []),
        catchError(err => {
          console.error('Failed to fetch sound categories', err);
          return of([]);
        })
      )
      .subscribe(data => {
        this.categoriesAndSounds = data;
      });
  }

  private fetchAllSounds(): void {
    this.http.get<any[]>(this.api_get_all_sounds)
      .pipe(
        map(data => data || []),
        catchError(err => {
          console.error('Failed to fetch all sounds', err);
          return of([]);
        })
      )
      .subscribe(data => {
        this.allSounds = data;
      });
  }
  
  private setCategoriesAndSounds(): void {
    this.fetchAllSounds();
    this.categoriesAndSounds.forEach((category) => {
      category.sounds = [];
      this.allSounds.forEach((sound) => {
        if(sound.category_id == category.id) {
          category.sounds.push(sound);
        }
      })
    })
  }
  

  getCategoriesAndSounds(): any[] {
    return this.categoriesAndSounds;
  }
}
