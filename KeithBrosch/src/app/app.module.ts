import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



import { MatCardModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';

import { PageHeaderComponent } from './page-header/page-header.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { MICDMAComponent } from './micdma/micdma.component';
import { PointcheckComponent } from './pointcheck/pointcheck.component';
import { FreelanceComponent } from './freelance/freelance.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    HomeContentComponent,
    ResumeComponent,
    ContactComponent,
    MICDMAComponent,
    PointcheckComponent,
    FreelanceComponent,
    ProjectsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    FontAwesomeModule,
    MatButtonModule,
    MatExpansionModule,
    MatListModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
