import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './component/home.component';
import {HttpClientModule} from "@angular/common/http";
import {NzTableModule} from "ng-zorro-antd/table";
import {NzButtonModule} from "ng-zorro-antd/button";
import {HomeRoutingModule} from "./home-routing.module";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzTagModule} from "ng-zorro-antd/tag";
import { AddEditMovieComponent } from './component/add-edit-movie/add-edit-movie.component';
import {NzModalModule} from "ng-zorro-antd/modal";

@NgModule({
  declarations: [
    HomeComponent,
    AddEditMovieComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    NzTableModule,
    NzButtonModule,
    NzIconModule,
    NzTagModule,
    NzModalModule
  ]
})
export class HomeModule {
}
