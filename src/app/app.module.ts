import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { ResumeComponent } from './pages/about/resume/resume.component';
import { NavigationHeaderComponent } from './component/navigation-header/navigation-header.component';
import { ContactComponent } from './pages/contact/contact.component';
import {CommonModule} from "@angular/common";
import {SharedModule} from "./component/shared.module";
import { TimelineComponent } from './pages/about/timeline/timeline.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    ArticlesComponent,
    ResumeComponent,
    ContactComponent,
    TimelineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
