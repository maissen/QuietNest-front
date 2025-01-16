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

  // Create user via HTTP request
  createUser(firstName: string, lastName: string): Observable<any> {
    const body = { firstName, lastName };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.api_init_user, body, { headers });
  }

  // Update user scene
  updateUserScene(userID: string, sceneID: number): Observable<any> {
    const body = { userID, sceneID };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.api_update_scene_for_user, body, { headers });
  }

  setUser(user: any): void {
    this.clearUser();
    console.log('user clear');
    localStorage.setItem('quiet_nest_dear_user', JSON.stringify(user));
    console.log('user set : ', this.getUser());
  }

  getUser(): any {
    const user = localStorage.getItem('quiet_nest_dear_user');
    return user ? JSON.parse(user) : null;
  }

  clearUser(): void {
    localStorage.removeItem('quiet_nest_dear_user');
  }
}
