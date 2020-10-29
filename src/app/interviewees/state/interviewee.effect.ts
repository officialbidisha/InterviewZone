import { Injectable } from "@angular/core";

import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";

import { Observable, of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";

import { IntervieweeService } from "../interviewee.service";
import * as intervieweeActions from "../state/interviewee.actions";
import { Interviewee } from "../interviewee.model";

@Injectable()
export class IntervieweeEffect {
  constructor(
    private actions$: Actions,
    private intervieweeService: IntervieweeService
  ) {}

  @Effect()
  loadInterviewees$: Observable<Action> = this.actions$.pipe( //listen for the action, cimmunocate with server, and dispatch an action
    ofType<intervieweeActions.LoadInterviewees>(//type of action is Load_Interviewees
      intervieweeActions.IntervieweeActionTypes.LOAD_INTERVIEWEES
    ),
    mergeMap((action: intervieweeActions.LoadInterviewees) =>
      this.intervieweeService.getInterviewees().pipe(
        map(
          (interviewees: Interviewee[]) =>//data from the server is the interviewee array
            new intervieweeActions.LoadIntervieweesSuccess(interviewees)//dispatch new action loadinterviewerssuccess
        ),
        catchError(err => of(new intervieweeActions.LoadIntervieweesFail(err)))
      )
    )
  );

  @Effect()
  loadInterviewee$: Observable<Action> = this.actions$.pipe(
    ofType<intervieweeActions.LoadInterviewee>(
      intervieweeActions.IntervieweeActionTypes.LOAD_INTERVIEWEE
    ),
    mergeMap((action: intervieweeActions.LoadInterviewee) =>
      this.intervieweeService.getIntervieweeById(action.payload).pipe(
        map(
          (interviewee: Interviewee) =>
            new intervieweeActions.LoadIntervieweeSuccess(interviewee)
        ),
        catchError(err => of(new intervieweeActions.LoadIntervieweeFail(err)))
      )
    )
  );

  @Effect()
  createInterviewee$: Observable<Action> = this.actions$.pipe(
    ofType<intervieweeActions.CreateInterviewee>(
      intervieweeActions.IntervieweeActionTypes.CREATE_INTERVIEWEE
    ),
    map((action: intervieweeActions.CreateInterviewee) => action.payload),
    mergeMap((interviewee: Interviewee) =>
      this.intervieweeService.createInterviewee(interviewee).pipe(
        map(
          (newInterviewee: Interviewee) =>
            new intervieweeActions.CreateIntervieweeSuccess(newInterviewee)
        ),
        catchError(err => of(new intervieweeActions.CreateIntervieweeFail(err)))
      )
    )
  );

  @Effect()
  updateInterviewee$: Observable<Action> = this.actions$.pipe(
    ofType<intervieweeActions.UpdateInterviewee>(
      intervieweeActions.IntervieweeActionTypes.UPDATE_INTERVIEWEE
    ),
    map((action: intervieweeActions.UpdateInterviewee) => action.payload),
    mergeMap((interviewee: Interviewee) =>
      this.intervieweeService.updateInterviewee(interviewee).pipe(
        map(
          (updateInterviewee: Interviewee) =>
            new intervieweeActions.UpdateIntervieweeSuccess({
              id: updateInterviewee.id,
              changes: updateInterviewee
            })
        ),
        catchError(err => of(new intervieweeActions.UpdateIntervieweeFail(err)))
      )
    )
  );

  @Effect()
  deleteInterviewee$: Observable<Action> = this.actions$.pipe(
    ofType<intervieweeActions.DeleteInterviewee>(
      intervieweeActions.IntervieweeActionTypes.DELETE_INTERVIEWEE
    ),
    map((action: intervieweeActions.DeleteInterviewee) => action.payload),
    mergeMap((id: number) =>
      this.intervieweeService.deleteInterviewee(id).pipe(
        map(() => new intervieweeActions.DeleteIntervieweeSuccess(id)),
        catchError(err => of(new intervieweeActions.DeleteIntervieweeFail(err)))
      )
    )
  );
}