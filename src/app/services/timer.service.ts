import { Injectable } from '@angular/core';
import { CreateSectionService } from './create-section.service';
import { SoundsService } from './sounds.service';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  seconds: number = 0;
  minutes: number = 0;
  hours: number = 0;
  timerInSeconds: number = 0;
  private countdownInterval: any;

  constructor(
    private soundsService: SoundsService
  ) { }

  incrementSeconds(): void {
    if (this.timerInSeconds == 0) {
      this.seconds++;
      if (this.seconds >= 60) {
        this.seconds = 0;
        this.incrementMinutes();
      }
    }
  }

  incrementMinutes(): void {
    if (this.timerInSeconds == 0) {
      this.minutes++;
      if (this.minutes >= 60) {
        this.minutes = 0;
        this.incrementHours();
      }
    }
  }

  incrementHours(): void {
    if (this.timerInSeconds == 0 && this.hours < 5) {
      this.hours++;
    }
  }

  decrementSeconds(): void {
    if (this.timerInSeconds == 0 && this.seconds > 0) {
      this.seconds--;
    } else if (this.seconds === 0 && this.minutes > 0) {
      this.decrementMinutes();
      this.seconds = 59;
    } else if (this.seconds === 0 && this.minutes === 0 && this.hours > 0) {
      this.decrementHours();
      this.minutes = 59;
      this.seconds = 59;
    }
  }

  decrementMinutes(): void {
    if (this.timerInSeconds == 0 && this.minutes > 0) {
      this.minutes--;
    } else if (this.minutes === 0 && this.hours > 0) {
      this.decrementHours();
      this.minutes = 59;
    }
  }

  decrementHours(): void {
    if (this.timerInSeconds == 0 && this.hours > 0) {
      this.hours--;
    }
  }

  setTimer(): void {
    this.timerInSeconds = this.hours * 3600 + this.minutes * 60 + this.seconds;
    this.startCountdown();
  }

  private startCountdown(): void {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }

    this.countdownInterval = setInterval(() => {
      if (this.timerInSeconds > 0) {
        this.timerInSeconds--;

        const hours = Math.floor(this.timerInSeconds / 3600);
        const minutes = Math.floor((this.timerInSeconds % 3600) / 60);
        const seconds = this.timerInSeconds % 60;

        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;

        if (this.seconds === 0 && this.minutes > 0) {
          this.decrementMinutes();
          this.seconds = 59;
        }

        if (this.minutes === 0 && this.hours > 0) {
          this.decrementHours();
          this.minutes = 60;
        }

      } else {
        clearInterval(this.countdownInterval);
        this.soundsService.toggle_play_pause_all_sounds();
      }
    }, 1000);
  }

  getFormattedCount(): string {
    const hours = Math.floor(this.timerInSeconds / 3600);
    const minutes = Math.floor((this.timerInSeconds % 3600) / 60);
    const seconds = this.timerInSeconds % 60;

    let formattedTime = '';
    if (hours > 0) formattedTime += `${hours} h `;
    if (minutes > 0 || hours > 0) formattedTime += `${minutes} m `;
    formattedTime += `${seconds} s`;

    return formattedTime;
  }

  clearTimer(): void {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
      this.countdownInterval = null;
    }

    this.timerInSeconds = 0;
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
  }
}
