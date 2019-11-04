import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageHeaderComponent } from './page-header/page-header.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { ResumeComponent } from './resume/resume.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component'


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: '', component: HomeContentComponent, pathMatch: 'full' },
    { path: 'resume', component: ResumeComponent, pathMatch: 'full' },
    { path: 'projects', component: ProjectsComponent, pathMatch: 'full' },
    { path: 'contact', component: ContactComponent, pathMatch: 'full' }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
