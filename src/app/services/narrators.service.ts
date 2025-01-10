import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NarratorsService {

  private api_get_all_narrators = "http://localhost:2003/api/get-all-narrators";

  private narratorsSubject = new BehaviorSubject<any[]>([]);

  constructor(private http: HttpClient) {
    this.fetchAllNarrators();
  }

  private fetchAllNarrators(): void {
    this.http.get<any[]>(this.api_get_all_narrators).subscribe({
      next: (narrators) => this.narratorsSubject.next(narrators),
      error: (err) => console.error('Failed to fetch narrators:', err)
    });
  }

  allNarratorsList(): Observable<any[]> {
    return this.narratorsSubject.asObservable();
  }
}
