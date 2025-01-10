import { Injectable } from '@angular/core';
import { SoundsService } from './sounds.service';

@Injectable({
  providedIn: 'root'
})
export class CreateSectionService {

  constructor(
    private soundsService: SoundsService
  ) {}

  getCategoriesAndSounds(): any[] {
    return this.soundsService.getCategoriesAndSounds();
  }
}
