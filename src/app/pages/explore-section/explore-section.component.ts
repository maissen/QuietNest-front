import { Component } from '@angular/core';
import { ExploreSectionService } from 'src/app/services/explore-section.service';

@Component({
  selector: 'app-explore-section',
  templateUrl: './explore-section.component.html',
  styleUrls: ['./explore-section.component.scss']
})
export class ExploreSectionComponent {

  constructor(
    public service: ExploreSectionService
  ){};

}
