import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { NgModule } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { SearchPipe } from './search/search-pipe';
import { SearchService } from './search/search.service';

@NgModule({
  declarations: [
    LoginComponent,
    SearchComponent,
    AppComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [LoginService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
