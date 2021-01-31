import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'catalogo',
        loadChildren: () => import('./catalogo/catalogo.module').then(module => module.CatalogoModule)
      }
    ]
  },
  
]

export const PagesRoutes = RouterModule.forChild(routes);
