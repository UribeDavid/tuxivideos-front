import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './error/not-found/not-found.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {
    path: 'principal', 
    canActivate: [AuthGuard], 
    canLoad: [AuthGuard], 
    loadChildren: () => import('./pages/pages.module').then(module => module.PagesModule)
  },
  {
    path: 'login', 
    canActivate: [LoginGuard], 
    canLoad: [LoginGuard],
    loadChildren: () => import('./auth/auth.module').then(module => module.AuthModule)
  },
  {
    path: '', redirectTo: '/principal', pathMatch: 'full'
  },
  {
    path: '**', component: NotFoundComponent
  }
]

export const AppRoutes = RouterModule.forRoot(routes);
