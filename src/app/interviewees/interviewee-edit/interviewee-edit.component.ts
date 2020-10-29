import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Observable } from "rxjs";

import * as intervieweeActions from "../state/interviewee.actions";
import * as fromInterviewee from "../state/interviewee.reducer";
import { Interviewee } from "../interviewee.model";

@Component({
  selector: 'app-interviewee-edit',
  templateUrl: './interviewee-edit.component.html',
  styleUrls: ['./interviewee-edit.component.scss']
})
export class IntervieweeEditComponent implements OnInit {
  intervieweeForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store<fromInterviewee.AppState>
  ) { }

  ngOnInit(): void {
    this.intervieweeForm = this.fb.group({
      name: ["", Validators.required],
      phone: ["", Validators.required],
      skills: ["", Validators.required],
      status: ["", Validators.required],
      id: null
    })

    const interviewee$: Observable<Interviewee> = this.store.select(
      fromInterviewee.getCurrentInterviewee
    )

    interviewee$.subscribe(currentInterviewee => {
      if (currentInterviewee) {
        this.intervieweeForm.patchValue({
          name: currentInterviewee.name,
          phone: currentInterviewee.phone,
          skills: currentInterviewee.skills,
          status: currentInterviewee.status,
          id: currentInterviewee.id
        });
      }
    })
  }

  updateInterviewee() {
    const updatedInterviewee: Interviewee = {
      name: this.intervieweeForm.get("name").value,
      phone: this.intervieweeForm.get("phone").value,
      skills: this.intervieweeForm.get("skills").value,
      status: this.intervieweeForm.get("status").value,
      id: this.intervieweeForm.get("id").value
    };

    this.store.dispatch(new intervieweeActions.UpdateInterviewee(updatedInterviewee))
  }

}


