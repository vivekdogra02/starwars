import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(private http: Http, 
  private route: ActivatedRoute,
        private router: Router,private loginService: LoginService) { }

  ngOnInit() {
  }

  login() {
    this.loginService.login(this.model.username, this.model.password).subscribe((response) => {
      if (response){
      swal({
            title: 'Login! Successfull',
            text: 'Welcome',
            type: 'success',
            confirmButtonText: 'Great'
          });
     this.router.navigate(['/search']);
      }
      else {
        swal({
          title: 'Error!',
          text: 'Username or password is incorrect',
          type: 'error',
          confirmButtonText: 'Retry'
          });
      }
    }, (error) => {
      
    });
  }
}
