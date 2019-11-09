import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeContentComponent } from './home-content/home-content.component';
import { ProjectsComponent } from './projects/projects.component';
import { MICDMAComponent } from './micdma/micdma.component';
import { PointcheckComponent } from './pointcheck/pointcheck.component';
import { FreelanceComponent } from './freelance/freelance.component';
import { AboutComponent } from './about/about.component'

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: '', component: HomeContentComponent, pathMatch: 'full' },
    { path: 'about', component: AboutComponent, pathMatch: 'full' },
    { path: 'projects', component: ProjectsComponent, pathMatch: 'full' },
    { path: 'micdma', component: MICDMAComponent, pathMatch: 'full' },
    { path: 'pointcheck', component: PointcheckComponent, pathMatch: 'full' },
    { path: 'freelance', component: FreelanceComponent, pathMatch: 'full' }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
