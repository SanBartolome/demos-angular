import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClickstreamDemoComponent } from './clickstream-demo.component';

const routes: Routes = [{ path: '', component: ClickstreamDemoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClickstreamDemoRoutingModule { }
