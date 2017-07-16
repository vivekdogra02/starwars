import 'rxjs/add/operator/map';

import { Headers, Http, Response, URLSearchParams } from '@angular/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SearchService {
    constructor(private http: Http) {
    }
    loadPlanets() {
        return this.http.get('http://swapi.co/api/planets').map(res => res.json());
    }
}
