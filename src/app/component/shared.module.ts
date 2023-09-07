import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavigationHeaderComponent} from "./navigation-header/navigation-header.component";
import {AppRoutingModule} from "../app-routing.module";
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [NavigationHeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  exports: [NavigationHeaderComponent]
})
export class SharedModule { }
