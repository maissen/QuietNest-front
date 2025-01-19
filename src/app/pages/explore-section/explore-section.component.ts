import { Component } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { ExploreSectionService } from 'src/app/services/explore-section.service';
import { PlaylistsService } from 'src/app/services/playlists.service';

@Component({
  selector: 'app-explore-section',
  templateUrl: './explore-section.component.html',
  styleUrls: ['./explore-section.component.scss']
})
export class ExploreSectionComponent {

  constructor(
    public service: ExploreSectionService,
    public categoriesService: CategoriesService,
    public playlistsService: PlaylistsService
  ){};

}
