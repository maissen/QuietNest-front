import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpeechNarratorCategoriesService {

  private api_SpeechNarratorCategoriesService = "http://localhost:2003/api/get-speechesNarratorsCategories";
  private speechesNarratorsCategories: any[] = [];

  constructor(
    private http: HttpClient
  ) {
    this.fetchSpeechesNarratorsCategories();
  }

  getSpeechesNarratorsCategories(): Observable<any[]> {
    return this.http.get<any[]>(this.api_SpeechNarratorCategoriesService);
  }

  get speechesNarratorsCategoriesList(): any[] {
    return this.speechesNarratorsCategories;
  }

  private fetchSpeechesNarratorsCategories(): void {
    this.getSpeechesNarratorsCategories().subscribe({
      next: (data) => {
        this.speechesNarratorsCategories = data;
      },
      error: (err) => console.error('Failed to fetch data:', err)
    });
  }
}
