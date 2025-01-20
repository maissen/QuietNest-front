import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  show = false;
  status: number = 0;
  statusMessage: string = '';
  message: string = '';


  showToast(
    message: string, 
    status: number = 0,
    statusMessage: string = '',
    duration: number = 3000,
  ) {
    if (message) {
      this.show = true;
      if(status >= 0 && status < 3) {
        this.status = status;
      }
      this.statusMessage = statusMessage;
      this.message = message;
      setTimeout(() => {
        this.show = false;
      }, duration);
    }
  }

  
}
