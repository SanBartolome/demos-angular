import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClickstreamDemoRoutingModule } from './clickstream-demo-routing.module';
import { ClickstreamDemoComponent } from './clickstream-demo.component';


@NgModule({
  declarations: [ClickstreamDemoComponent],
  imports: [
    CommonModule,
    ClickstreamDemoRoutingModule
  ]
})
export class ClickstreamDemoModule { }
