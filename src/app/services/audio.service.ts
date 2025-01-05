import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  private apiUrl = 'http://localhost:2003/api/audios-data';

  constructor(private http: HttpClient) { }

  getAudioData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
