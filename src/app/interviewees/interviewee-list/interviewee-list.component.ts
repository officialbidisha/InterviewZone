import { Component, OnInit } from '@angular/core';
import {Store,select } from "@ngrx/store";
import { Observable } from "rxjs";

import * as intervieweeActions from "../state/interviewee.actions";
import * as fromInterviewee from "../state/interviewee.reducer";
import { Interviewee } from "../interviewee.model";
@Component({
  selector: 'app-interviewee-list',
  templateUrl: './interviewee-list.component.html',
  styleUrls: ['./interviewee-list.component.scss']
})
export class IntervieweeListComponent implements OnInit {

  // interviewees;
  // constructor(private store: Store<any>) { }

  // ngOnInit(): void {
  //   this.store.dispatch({type:'LOAD_INTERVIEWEES'})
  //   this.store.subscribe(state=>(this.interviewees=state.interviewees.interviewees))
  // }
  interviewees$: Observable<Interviewee[]>;
  error$: Observable<String>;

  constructor(private store: Store<fromInterviewee.AppState>) {}

  ngOnInit() {
    this.store.dispatch(new intervieweeActions.LoadInterviewees());
    this.interviewees$ = this.store.pipe(select(fromInterviewee.getInterviewees));
    this.error$ = this.store.pipe(select(fromInterviewee.getError));
  }

  deleteInterviewee(interviewee: Interviewee) {
    if (confirm("Are You Sure You want to Delete the User?")) {
      this.store.dispatch(new intervieweeActions.DeleteInterviewee(interviewee.id));
    }
  }

  editInterviewee(interviewee: Interviewee) {
    this.store.dispatch(new intervieweeActions.LoadInterviewee(interviewee.id));
  }


}
