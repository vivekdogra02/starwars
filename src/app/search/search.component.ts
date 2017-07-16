import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { SearchPipe } from './search-pipe';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  allPlanets$: any;
  planets: any;
  public width: any;
  public height: any;
  constructor(private searchService: SearchService) { }

  ngOnInit() {
  this.allPlanets$ = this.searchService.loadPlanets();
  this.allPlanets$.subscribe(
    (planets) => {
      console.log(planets);
      this.planets = planets.results;
      for( var i =0 ; i<this.planets.length; i++) {
        if (this.planets[i].population === 'unknown') {
          this.planets[i].width = 50;
          this.planets[i].height = 50;
        } else if(this.planets[i].population > 999 && this.planets[i].population <=4500000000) {
          this.planets[i].width  = 70;
          this.planets[i].height =70;
        } else {
          this.planets[i].width  = 100
          this.planets[i].height =100;
        }
      }
    });

}

}
