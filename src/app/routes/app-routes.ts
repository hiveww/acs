import {NgModule} from '@angular/core';
import {RouterModule, Router, Routes} from '@angular/router';

import {LoginComponent} from '../components/pages/login/login.component';
import {NoRouteFoundComponent} from '../components/pages/no-route-found/no-route-found.component';
import {LoginGuardGuard} from './login-guard.guard';

const routes : Routes = [
  {
    path: '',
    component: LoginComponent,
    canActivate: [LoginGuardGuard]
  },
  {
    path: '**',
    component: NoRouteFoundComponent
  }
];


@NgModule ({
  imports : [RouterModule.forRoot(routes)],
  exports : [RouterModule]
})

export class AppRoutes {
}
