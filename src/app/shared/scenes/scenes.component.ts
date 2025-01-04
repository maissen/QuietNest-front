import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scenes',
  templateUrl: './scenes.component.html',
  styleUrls: ['./scenes.component.scss']
})
export class ScenesComponent implements OnInit{

  constructor(private router: Router){};

  ngOnInit(): void {
    document.body.style.overflow = 'hidden';
    document.body.style.marginRight = this.getScrollbarWidth() + 'px';
  }  

  closeComponent() {
    document.body.style.overflow = '';
    document.body.style.marginRight = '0px';
    this.router.navigate(['home/']);
  }

  getScrollbarWidth(): number {
    return window.innerWidth - document.documentElement.clientWidth;
  }
  
}
