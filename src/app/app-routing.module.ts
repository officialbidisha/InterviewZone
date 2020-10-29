import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const appRoutes: Routes = [
  
  {path: "", component: HomeComponent },
  { path:"interviewees",
  
     loadChildren: () =>
             import('./interviewees/interviewees.module').then(
               (m) => m.IntervieweesModule
             ),
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  declarations:[]
})
export class AppRoutingModule { }