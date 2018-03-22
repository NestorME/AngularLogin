import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';


// Define which component should be loaded based on the current URL
export const routes: Routes = [
  { path: '',       component: LoginComponent },
  { path: 'login',  component: LoginComponent },
  { path: 'home',  component: HomeComponent },
  { path: '**',     component: LoginComponent },
];
