import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit{
  firstName: string = '';
  lastName: string = '';
  profileID: string = '';

  constructor(
    private router: Router, 
    private user: UserService,
  ) {}

  ngOnInit(): void {
    if (this.user.getUser() !== null) {
      this.router.navigate(['/app']);
    }
  }

  isFormValid(): boolean {
    return this.firstName.length >= 3 && this.lastName.length >= 3;
  }

  onSubmitregistration(): void {
    
    if(this.isFormValid()) {
      
      this.user.createUser(this.firstName, this.lastName).subscribe(
        (response) => {
          this.user.setUser(response);
          this.router.navigate(['/app']);
        },
        (error) => {
          console.error('Error creating user:', error);
        }
      );
    
    }
  }

  onSubmitLogin(): void {
    if(this.profileID) {
      this.user.fetchUser(this.profileID).subscribe(
        (res) => {
          console.log(res);
          this.user.setUser(res);
          this.router.navigate(['/app'])
        },
        (err) => {
          alert('could\'t fetch user by id');
        }
      )
    }
  }
  
}
