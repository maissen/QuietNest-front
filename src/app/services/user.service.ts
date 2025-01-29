import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private http: HttpClient
  ) { }

  api_init_user = "http://localhost:2003/api/set-user";
  api_update_scene_for_user = "http://localhost:2003/api/update-user-scene";
  api_fetch_user = "http://localhost:2003/login";

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
    localStorage.setItem('quiet_nest_user', JSON.stringify(user));
  }

  getUser(): any {
    const user = localStorage.getItem('quiet_nest_user');
    return user ? JSON.parse(user) : null;
  }

  clearUser(): void {
    localStorage.removeItem('quiet_nest_user');
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
