import { Update } from '@ngrx/entity';
import { Action } from "@ngrx/store";

//import { Update } from "@ngrx/entity";

import { Interviewee } from "../interviewee.model";


export enum IntervieweeActionTypes {
  LOAD_INTERVIEWEES = "[Interviewee] Load Interviewees",//[Source] Event
  LOAD_INTERVIEWEES_SUCCESS = "[Interviewee] Load Interviewees Success",
  LOAD_INTERVIEWEES_FAIL = "[Interviewee] Load Interviewees Fail",
  LOAD_INTERVIEWEE = "[Interviewee] Load Interviewee",
  LOAD_INTERVIEWEE_SUCCESS = "[Interviewee] Load Interviewee Success",
  LOAD_INTERVIEWEE_FAIL = "[Interviewee] Load Interviewee Fail",
   CREATE_INTERVIEWEE = "[Interviewee] Create Interviewee",
   CREATE_INTERVIEWEE_SUCCESS = "[Interviewee] Create Interviewee Success",
   CREATE_INTERVIEWEE_FAIL = "[Interviewee] Create Interviewee Fail",
   UPDATE_INTERVIEWEE = "[Interviewee] Update Interviewee",
   UPDATE_INTERVIEWEE_SUCCESS = "[Interviewee] Update Interviewee Success",
   UPDATE_INTERVIEWEE_FAIL = "[Interviewee] Update Interviewee Fail",
   DELETE_INTERVIEWEE = "[Interviewee] Delete Interviewee",
   DELETE_INTERVIEWEE_SUCCESS = "[Interviewee] Delete Interviewee Success",
   DELETE_INTERVIEWEE_FAIL = "[Interviewee] Delete Interviewee Fail"
}

export class LoadInterviewees implements Action {
  readonly type = IntervieweeActionTypes.LOAD_INTERVIEWEES;//
}

export class LoadIntervieweesSuccess implements Action {
  readonly type = IntervieweeActionTypes.LOAD_INTERVIEWEES_SUCCESS;

  constructor(public payload: Interviewee[]) {}
}

export class LoadIntervieweesFail implements Action {
  readonly type = IntervieweeActionTypes.LOAD_INTERVIEWEES_FAIL;

  constructor(public payload: string) {}
}

 export class LoadInterviewee implements Action {
   readonly type = IntervieweeActionTypes.LOAD_INTERVIEWEE;

   constructor(public payload: number) {} 
}

 export class LoadIntervieweeSuccess implements Action {
   readonly type = IntervieweeActionTypes.LOAD_INTERVIEWEE_SUCCESS;

 constructor(public payload: Interviewee) {}
}

 export class LoadIntervieweeFail implements Action {
   readonly type = IntervieweeActionTypes.LOAD_INTERVIEWEE_FAIL;

   constructor(public payload: string) {}
 }

 export class CreateInterviewee implements Action {
   readonly type = IntervieweeActionTypes.CREATE_INTERVIEWEE;

  constructor(public payload: Interviewee) {}
 }

 export class CreateIntervieweeSuccess implements Action {
   readonly type = IntervieweeActionTypes.CREATE_INTERVIEWEE_SUCCESS;

   constructor(public payload: Interviewee) {}
 }

 export class CreateIntervieweeFail implements Action {
   readonly type = IntervieweeActionTypes.CREATE_INTERVIEWEE_FAIL;

   constructor(public payload: string) {}
 }

 export class UpdateInterviewee implements Action {
   readonly type = IntervieweeActionTypes.UPDATE_INTERVIEWEE;

   constructor(public payload: Interviewee) {}
 }

 export class UpdateIntervieweeSuccess implements Action {
   readonly type = IntervieweeActionTypes.UPDATE_INTERVIEWEE_SUCCESS;

   constructor(public payload: Update<Interviewee>) {}
 }

 export class UpdateIntervieweeFail implements Action {
   readonly type = IntervieweeActionTypes.UPDATE_INTERVIEWEE_FAIL;

   constructor(public payload: string) {}
 }

 export class DeleteInterviewee implements Action {
   readonly type = IntervieweeActionTypes.DELETE_INTERVIEWEE;

   constructor(public payload: number) {}
 }

 export class DeleteIntervieweeSuccess implements Action {
   readonly type = IntervieweeActionTypes.DELETE_INTERVIEWEE_SUCCESS;

   constructor(public payload: number) {}
 }

 export class DeleteIntervieweeFail implements Action {
    
  readonly type = IntervieweeActionTypes.DELETE_INTERVIEWEE_FAIL;

   constructor(public payload: string) {}
 }

export type Actions =
  | LoadInterviewees
  | LoadIntervieweesSuccess
  | LoadIntervieweesFail
  | LoadInterviewee
   | LoadIntervieweeSuccess
   | LoadIntervieweeFail
   | CreateInterviewee
   | CreateIntervieweeSuccess
   | CreateIntervieweeFail
   | UpdateInterviewee
   | UpdateIntervieweeSuccess
   | UpdateIntervieweeFail
   | DeleteInterviewee
   | DeleteIntervieweeSuccess
   | DeleteIntervieweeFail;