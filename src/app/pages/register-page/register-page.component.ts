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
  isloading: boolean = false;

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

  sanitizeString(input: string): string {

    const str = input[0].toUpperCase() + input.slice(1)

    return str
      .trim()
      .replace(/\s+/g, ' ')
  }
  

  isFormValid(): boolean {
    if(this.firstName.length > 0) {
      this.firstName = this.sanitizeString(this.firstName);
    }
    if(this.lastName.length > 0) {
      this.lastName = this.sanitizeString(this.lastName);
    }

    if (this.firstName.length < 3) {
      this.toast.showToast('First name must be between', 2, ' 3 and 10 characters');
      return false;
    } else if (this.firstName.length > 10) {
      this.toast.showToast('First name must be between', 2, ' 3 and 10 characters');
      return false;
    } else if (this.lastName.length < 3) {
      this.toast.showToast('Last name must be between', 2, ' 3 and 10 characters');
      return false;
    } else if (this.lastName.length > 10) {
      this.toast.showToast('Last name must be between', 2, ' 3 and 10 characters');
      return false;
    }

    return true;
  }

  onSubmitregistration(): void {
    if (this.isFormValid()) {
      this.isloading = true;
      this.user.createUser(this.firstName, this.lastName).subscribe(
        (response) => {
          this.user.setUser(response);
          this.isloading = false;
          this.router.navigate(['/app']);
        },
        (error) => {
          console.error('Error creating user:', error);
          this.isloading = false;
          this.toast.showToast('Oops, an error occurred', 2, 'Request failed');
        }
      );
    }
  }
}
