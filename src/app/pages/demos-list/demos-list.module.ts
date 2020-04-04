import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemosListRoutingModule } from './demos-list-routing.module';
import { DemosListComponent } from './demos-list.component';


@NgModule({
  declarations: [DemosListComponent],
  imports: [
    CommonModule,
    DemosListRoutingModule
  ]
})
export class DemosListModule { }
