import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavigationHeaderComponent} from "./navigation-header/navigation-header.component";
import {AppRoutingModule} from "../app-routing.module";



@NgModule({
  declarations: [NavigationHeaderComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  exports: [NavigationHeaderComponent]
})
export class SharedModule { }
