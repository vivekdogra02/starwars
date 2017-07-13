import 'rxjs/add/operator/map';

import { Headers, Http, Response } from '@angular/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {
 constructor(private http: Http) {
    }
    login(username: string, password: string) {
        return this.http.get('http://swapi.co/api/people/')
            .map((response: Response) => {
                const user = response.json().results;
                    const userfound = user.some(function (el) {
                        if (el.name === username && el.birth_year === password) {
                            return el;
                        } else {
                            console.log('user not found');
                        }
                      });
            });
    }
}
