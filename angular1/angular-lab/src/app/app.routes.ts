import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component'; // cuando el usuario pinche en esta URL, muestrale este componente
import { LoginComponent } from './components/pages/login/login.component';
import { AboutComponent } from './components/pages/about/about.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { GalleryComponent } from './components/pages/gallery/gallery.component';
import { CrudComponent } from './components/pages/crud/crud.component';
import { ProfileComponent } from './components/pages/profile/profile.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'crud', component: CrudComponent },
  { path: 'profile', component: ProfileComponent },
];