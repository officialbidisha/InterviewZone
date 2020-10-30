import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { IntervieweeComponent } from './interviewee/interviewee.component';
import { IntervieweeAddComponent } from './interviewee-add/interviewee-add.component';
import { IntervieweeEditComponent } from './interviewee-edit/interviewee-edit.component';
import { IntervieweeListComponent } from './interviewee-list/interviewee-list.component';

import {StoreModule} from "@ngrx/store";
import { intervieweeReducer } from "./state/interviewee.reducer";

import {EffectsModule,Actions } from "@ngrx/effects";
import {IntervieweeEffect} from './state/interviewee.effect';
const intervieweeRoutes: Routes = [{ path: "", component: IntervieweeComponent }];
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(intervieweeRoutes), // intended for feature modules.
    StoreModule.forFeature("interviewees", intervieweeReducer),
    EffectsModule.forFeature([IntervieweeEffect])
    
  ], 
  declarations: [
      IntervieweeComponent,
      IntervieweeAddComponent,
      IntervieweeEditComponent, 
      IntervieweeListComponent],
 
})
export class IntervieweesModule { }
