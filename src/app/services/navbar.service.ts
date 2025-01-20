import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  showNavbar: boolean = false;

  constructor() { }
}
