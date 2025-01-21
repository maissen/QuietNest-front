import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/services/toast.service';
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
    private router: Router,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    if (this.user.getUser() !== null) {
      this.router.navigate(['/app']);
    }
  }

  isFormValid(): boolean {

    if(this.firstName.length < 3) {
      this.toast.showToast('First name must be at least 3 characters', 2)
    }
    else if(this.lastName.length < 3) {
      this.toast.showToast('Last name must be at least 3 characters', 2)
    }

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
          this.toast.showToast('Oops, an error occured', 2, 'Request failed');
        }
      );
    }
  }

}
