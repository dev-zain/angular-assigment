import { Routes } from '@angular/router';
import { MyDashboard } from './dashboard/my-dashboard/my-dashboard';
import { MyProfile } from './profile/my-profile/my-profile';
import { Login } from './auth/login/login';
import { UserList } from './users/user-list/user-list'; // <-- new

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: MyDashboard },
  { path: 'profile', component: MyProfile },
  { path: 'users', component: UserList }, // <-- new
  { path: 'login', component: Login },
];