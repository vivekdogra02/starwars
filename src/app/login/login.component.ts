import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { Component, OnInit } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { LoginService } from './login.service';
import { Observable } from 'rxjs/Observable';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  model: any = {};
  constructor(private http : Http, private loginService: LoginService) { }

  ngOnInit() {
  }

  login() {
    this.loginService.login(this.model.username, this.model.password).subscribe((resposne)=> {
     console.log(resposne);
    }, (error) => {
      console.log(error);
    });
  }
}
