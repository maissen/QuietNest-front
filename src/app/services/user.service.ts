import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private http: HttpClient
  ) { }

  api_init_user = "https://quietrest-back.onrender.com/api/set-user";
  api_update_scene_for_user = "https://quietrest-back.onrender.com/api/update-user-scene";
  api_fetch_user = "https://quietrest-back.onrender.com/login";
  api_fetch_user_scene_by_id = "https://quietrest-back.onrender.com/get-user-scene/";

  createUser(firstName: string, lastName: string): Observable<any> {
    const body = { firstName, lastName };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.api_init_user, body, { headers });
  }

  fetchUser(userID: string): Observable<any> {
    const url = `${this.api_fetch_user}/${userID}`;
    return this.http.get(url);
  }

  updateUserScene(userID: string, sceneID: number): Observable<any> {
    const body = { userID, sceneID };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.api_update_scene_for_user, body, { headers });
  }

  setUser(user: any): void {
    this.clearUser();
    localStorage.setItem('quiet_rest_user', JSON.stringify(user));
    // console.log('user is set');
  }

  getUser(): any {
    const user = localStorage.getItem('quiet_rest_user');
    return user ? JSON.parse(user) : null;
  }

  clearUser(): void {
    // console.log('user is cleared');
    localStorage.removeItem('quiet_rest_user');
  }

  LoadSceneByID(): Observable<any> {
    return this.http.get<any>(`${this.api_fetch_user_scene_by_id}${this.getUser().id}`).pipe(
      catchError((error) => {
        return of(null);
      })
    );
  }
  

  addUserAttribute(attribute: string, value: any): void {
    const user = this.getUser();
    if (user) {
      user[attribute] = value;
      this.setUser(user);
    } 
    else {
      console.error('No user found to update. Make sure a user is set.');
    }
  }
  
}
