import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './component/login/login.component';
import {RegisterComponent} from './component/register/register.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import {HttpClientModule} from "@angular/common/http";
import {NzCardModule} from "ng-zorro-antd/card";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";
import {ReactiveFormsModule} from "@angular/forms";
import {NzCheckboxModule} from "ng-zorro-antd/checkbox";
import {NzButtonModule} from "ng-zorro-antd/button";
import {AuthRoutingModule} from "./auth-routing.module";
import {NzIconModule} from "ng-zorro-antd/icon";

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    HttpClientModule,
    NzLayoutModule,
    NzCardModule,
    NzFormModule,
    NzInputModule,
    ReactiveFormsModule,
    NzCheckboxModule,
    NzButtonModule,
    NzIconModule,

  ]
})
export class AuthModule {
}
