import { Injectable } from '@angular/core';
import { CreateSectionService } from './create-section.service';

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
    private createSectionService: CreateSectionService
  ) { }

  incrementSeconds(): void {
    this.seconds++;
  }

  incrementMinutes(): void {
    this.minutes++;
  }

  incrementHours(): void {
    this.hours++;
  }

  decrementSeconds(): void {
    if (this.seconds > 0) {
      this.seconds--;
    }
  }
  
  decrementMinutes(): void {
    if (this.minutes > 0) {
      this.minutes--;
    }
  }
  
  decrementHours(): void {
    if (this.hours > 0) {
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
      } 
      else {
        clearInterval(this.countdownInterval);
        this.createSectionService.togglePauseActiveSounds();
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
