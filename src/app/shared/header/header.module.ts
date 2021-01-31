import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    NzPageHeaderModule,
    NzButtonModule
  ],
  exports: [ HeaderComponent ]
})
export class HeaderModule { }
