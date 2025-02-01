import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  public api_get_all_categories = "https://quietrest-back.onrender.com/api/get-all-categories";
  private allCategories: any[] = [];

  setAllCategories(list: any[]): void {
    this.allCategories = list;
  }
  
  getAllCategories(): any[] {
    return this.allCategories;
  }

  getCategoryById(categoryID: number): any {
    return this.getAllCategories().find((category: any) => category.id == categoryID);
  }
}
