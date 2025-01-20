import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {
  @Input() message: string = '';
  @Input() duration: number = 3000;
  showToast: boolean = false;

  ngOnInit(): void {
    if (this.message) {
      this.showToast = true;
      setTimeout(() => {
        this.showToast = false;
      }, this.duration);
    }
  }
}
