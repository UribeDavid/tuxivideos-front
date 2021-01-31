import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found.component';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzButtonModule } from 'ng-zorro-antd/button';


@NgModule({
  declarations: [NotFoundComponent],
  imports: [
    CommonModule,
    NzResultModule,
    NzButtonModule
  ],
  exports: [NotFoundComponent]
})
export class NotFoundModule { }
