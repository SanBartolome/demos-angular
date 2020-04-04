import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemosListComponent } from './demos-list.component';

const routes: Routes = [{ path: '', component: DemosListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemosListRoutingModule { }
