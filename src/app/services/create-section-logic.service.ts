import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CreateSectionLogicService {
  categories: any[] = [];
  private api_get_all_categories = 'http://localhost:2003/api/create-section/categories';
  private api_activate_category = 'http://localhost:2003/api/create-section/activate-category/';
  private api_desactivate_category = 'http://localhost:2003/api/create-section/desactivate-category/';
  private api_get_ctgr_sounds = 'http://localhost:2003/api/create-section/get-sounds/';
  private api_activate_sound = 'http://localhost:2003/api/create-section/activate-audio/';
  private api_desactivate_sound = 'http://localhost:2003/api/create-section/desactivate-audio/';

  constructor(private http: HttpClient) {}

  getCategoriesFromApi(): void {
    this.http.get<any[]>(this.api_get_all_categories).subscribe(
      (categories) => {
        const categoryRequests = categories.map((category) => 
          this.getSoundsByCategoryId(category.id).toPromise().then((sounds) => {
            category.items = sounds;
          })
        );

        // Wait for all requests to finish
        Promise.all(categoryRequests).then(() => {
          this.setCategories(categories);
          console.log('Categories and sounds fetched successfully:', categories);
        }).catch((error) => {
          console.error('Error fetching sounds for categories:', error);
        });
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
  }

  getSoundsByCategoryId(categoryId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.api_get_ctgr_sounds}${categoryId}`);
  }

  private setCategories(categories: any[]): void {
    this.categories = categories;
  }

  getAllCategories(): any[] {
    return this.categories;
  }

  toggleCategory(category: any): void {
    const apiUrl = category.isActive 
      ? `${this.api_desactivate_category}${category.id}` 
      : `${this.api_activate_category}${category.id}`;
  
    this.http.patch(apiUrl, {}).subscribe(() => {
        category.isActive = !category.isActive;
        const state = category.isActive ? 'activated' : 'deactivated';
        console.log(`Category ${category.name} ${state}.`);
      },
      (error) => {
        console.error('Error updating category:', error);
      }
    );
  }
  

  getActiveCategories(): any[] {
    const activeCategories = this.categories.filter((category) => category.isActive);
    return activeCategories.length > 0 ? activeCategories : this.getAllCategories();
  }

  toggleSound(sound: any): void {
    const apiUrl = sound.isActive 
      ? `${this.api_desactivate_sound + sound.id}` 
      : `${this.api_activate_sound + sound.id}`;
  
    this.http.patch(apiUrl, {}).subscribe(
      () => {
        sound.isActive = !sound.isActive;
        const state = sound.isActive ? 'activated' : 'deactivated';
        console.log(`Sound ${sound.name} ${state}.`);
      },
      (error) => {
        console.error('Error updating sound:', error);
      }
    );
  }
  
}
