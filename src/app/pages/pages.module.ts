import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { HeaderModule } from '../shared/header/header.module';
import { PagesRoutes } from './pages.routing';

@NgModule({
  declarations: [PagesComponent],
  imports: [
    PagesRoutes,
    CommonModule,
    HeaderModule,
  ]
})
export class PagesModule { }
