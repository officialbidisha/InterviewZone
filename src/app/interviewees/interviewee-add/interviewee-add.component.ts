import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store, State, select } from "@ngrx/store";
import * as intervieweeActions from "../state/interviewee.actions";
import * as fromInterviewee from "../state/interviewee.reducer";
import { Interviewee } from "../interviewee.model";

@Component({
  selector: 'app-interviewee-add',
  templateUrl: './interviewee-add.component.html',
  styleUrls: ['./interviewee-add.component.scss']
})
export class IntervieweeAddComponent implements OnInit {
  intervieweeForm:FormGroup;
  constructor(
    private fb: FormBuilder,
    private store: Store<fromInterviewee.AppState>
  ) { }

  ngOnInit() {
    this.intervieweeForm = this.fb.group({
      name: ["", Validators.required],
      phone: ["", Validators.required],
      skills: ["", Validators.required],
      status: ["", Validators.required]
    });
  }
  createInterviewee() {
    const newInterviewee: Interviewee = {
      name: this.intervieweeForm.get("name").value,
      phone: this.intervieweeForm.get("phone").value,
      skills: this.intervieweeForm.get("skills").value,
      status: this.intervieweeForm.get("status").value
    };

    this.store.dispatch(new intervieweeActions.CreateInterviewee(newInterviewee));

    this.intervieweeForm.reset();
  }

}
