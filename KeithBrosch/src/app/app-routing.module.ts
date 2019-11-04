import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageHeaderComponent } from './page-header/page-header.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component'
import { MICDMAComponent } from './micdma/micdma.component';
import { PointcheckComponent } from './pointcheck/pointcheck.component';
import { FreelanceComponent } from './freelance/freelance.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: '', component: HomeContentComponent, pathMatch: 'full' },
    { path: 'resume', component: ResumeComponent, pathMatch: 'full' },
    { path: 'projects/micdma', component: MICDMAComponent, pathMatch: 'full' },
    { path: 'projects/pointcheck', component: PointcheckComponent, pathMatch: 'full' },
    { path: 'projects/freelance', component: FreelanceComponent, pathMatch: 'full' },
    { path: 'contact', component: ContactComponent, pathMatch: 'full' }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
