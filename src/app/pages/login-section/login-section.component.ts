import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-login-section',
  templateUrl: './login-section.component.html',
  styleUrls: ['./login-section.component.scss']
})
export class LoginSectionComponent implements OnInit {

  email: string = '';
  password: string = '';

  constructor(
    private http: HttpClient,
    private router: Router // Inject Router
  ) {}

  ngOnInit(): void {}

  login() {
    this.http.post('http://localhost:2003/api/auth/login', {
      email: this.email,
      password: this.password,
    }).subscribe(
        (response: any) => {
          console.log(response);

          if (response.message === 'Login successful') {
              this.router.navigate(['/app']);
          } else {
              alert('Incorrect email or password. Please try again.');
          }
        },
        (error) => {
          console.error(error);
          alert('An error occurred while processing your request. Please try again later.');
        }
    );
  }
}
