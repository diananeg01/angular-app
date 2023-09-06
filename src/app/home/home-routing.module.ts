import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./component/home.component";
import {authGuard} from "../auth/service/auth.guard";

const ROUTES: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [authGuard]
  },
  // {
  //   path: '**',
  //   redirectTo: 'home'
  // }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule {
}
