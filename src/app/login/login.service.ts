import 'rxjs/add/operator/map';

import { Headers, Http, Response } from '@angular/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {
    currentUser:  any;
    result: boolean;
 constructor(private http: Http) {
    }
    login(username: string, password: string) {
        return this.http.get('http://swapi.co/api/people/')
            .map((response: Response) => {
                const user = response.json();
                this.result = false;
                    const userfound = user.results.some( (el) => {
                        if (el.name === username && el.birth_year === password) {
                            this.currentUser = el;
                            this.result = true;
                            return this.result;
                            //return this.currentUser;
                        } else {
                            console.log('user not found');
                            this.result = false;
                            return this.result;
                        }
                      });
                      return this.result;
            });
    }
}
