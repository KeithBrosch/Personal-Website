import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageHeaderComponent } from './page-header/page-header.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: '', component: PageHeaderComponent, pathMatch: 'full' },
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
