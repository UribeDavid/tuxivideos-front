import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogoComponent } from './catalogo.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';

import { CalendarOutline } from '@ant-design/icons-angular/icons';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { CatalogoRoutes } from './catalogo.routing';
import { NzButtonModule } from 'ng-zorro-antd/button';

const icons: IconDefinition[] = [ CalendarOutline ];


@NgModule({
  declarations: [CatalogoComponent],
  imports: [
    CommonModule,
    CatalogoRoutes,
    NzCardModule,
    NzIconModule.forChild(icons),
    NzNotificationModule,
    NzToolTipModule,
    NzModalModule,
    NzButtonModule
  ]
})
export class CatalogoModule { }
