import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MustBeLoggedGuard } from './core/guards/must-be-logged.guard';

const routes: Routes = [
  {
    path: 'dashboard',
    canActivate: [MustBeLoggedGuard],
    canLoad: [MustBeLoggedGuard],
    loadChildren: () =>
      import('./pages/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'clickstream-demo',
    loadChildren: () =>
      import('./pages/clickstream-demo/clickstream-demo.module').then(
        (m) => m.ClickstreamDemoModule
      ),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./pages/demos-list/demos-list.module').then(
        (m) => m.DemosListModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
