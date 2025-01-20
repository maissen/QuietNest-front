import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {
  firstName: string = '';
  lastName: string = '';

  constructor(
    private user: UserService,
    private router: Router
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

}
