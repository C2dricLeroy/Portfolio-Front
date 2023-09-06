import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {AboutComponent} from "./pages/about/about.component";
import {ProjectsComponent} from "./pages/projects/projects.component";
import {ResumeComponent} from "./pages/resume/resume.component";
import {ArticlesComponent} from "./pages/articles/articles.component";

const routes: Routes = [{
  path: '', component: HomeComponent,
}, {
  path: 'about', component: AboutComponent
}, {
  path: 'projects', component: ProjectsComponent
}, {
  path : 'articles', component: ArticlesComponent
}, {
  path: 'resume', component: ResumeComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
