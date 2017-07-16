import 'rxjs/add/operator/map';

import { Headers, Http, Response, URLSearchParams } from '@angular/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SearchService {
    currentUser:  any;
    result: boolean;
    constructor(private http: Http) {
    }
    loadPlanets() {
        console.log(`searching for $(search)`);
        // let params: URLSearchParams = new URLSearchParams();
        // params.set('search', search);
        return this.http.get('http://swapi.co/api/planets').map(res => res.json());
    }
}
