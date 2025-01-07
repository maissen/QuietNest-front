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

  // Toggle sound activation within a category
  toggleSound(categoryId: number, soundId: number): void {
    const category = this.categories.find((cat) => cat.id === categoryId);
    if (category) {
      const sound = category.items.find((item: any) => item.id === soundId);
      if (sound) {
        const newIsActiveState = !sound.isActive; // Toggle the state of the sound
        sound.isActive = newIsActiveState;
        const state = newIsActiveState ? 'activated' : 'deactivated';
        console.log(`Sound ${sound.name} ${state}.`);
      } else {
        console.error(`Sound with id ${soundId} not found in category ${category.name}.`);
      }
    } else {
      console.error(`Category with id ${categoryId} not found.`);
    }
  }
}
