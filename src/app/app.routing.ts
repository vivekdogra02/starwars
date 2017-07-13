import { LoginComponent } from './login/login.component';
import { Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';

export const AppRoutes: Routes = [
    { path: 'search', component: SearchComponent},
      { path: 'login', component: LoginComponent},
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: '**', redirectTo: 'login', pathMatch: 'full' },
];
