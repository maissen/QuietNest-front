import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-section',
  templateUrl: './search-section.component.html',
  styleUrls: ['./search-section.component.scss']
})
export class SearchSectionComponent implements OnInit {

  parameterType: string | null = null;
  parameterValue: string | null = null;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {

      if (this.router.url.includes('/narrator')) {

        this.parameterType = 'narrator';
        this.parameterValue = params.get('narratorID');
      
      } 
      else if (this.router.url.includes('/category')) {
      
        this.parameterType = 'category';
        this.parameterValue = params.get('categoryID');
      
      } 
      else if (this.router.url.includes('/time')) {
      
        this.parameterType = 'time';
        this.parameterValue = params.get('timeID');
      
      }
    });
  }
}
