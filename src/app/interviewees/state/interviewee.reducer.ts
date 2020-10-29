//Before Building State
/*const initialState={
    interviewees:[
        {
            
                "name":"Shaurya Sharma",
                "phone":"8921034566",
                "skills":"BlockChain, TwitterIonic",
                "status":"Approved",
                "id":1
    
            
        },
        
    ],
        loading:false,
        loaded:true
};
export function intervieweeReducer(state=initialState,action){
    switch(action.type){
        case "LOAD_INTERVIEWEES":{
            return{
                ...state,
                loading:true,
                loaded:false
            };
        }

        default:{
            return state
        }
    }
}*/
//After Building Reducer
import * as intervieweeActions from "./interviewee.actions";
import { createFeatureSelector, createSelector } from "@ngrx/store";

import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";

import { Interviewee } from "../interviewee.model";
import * as fromRoot from "../../state/app-state";

export interface IntervieweeState extends EntityState<Interviewee> {
  selectedIntervieweeId: number | null;
  loading: boolean;
  loaded: boolean;
  error: string;
}

export interface AppState extends fromRoot.AppState {
  interviewees: IntervieweeState;
}

export const intervieweeAdapter: EntityAdapter<Interviewee> = createEntityAdapter<
  Interviewee
>();

export const defaultInterviewee: IntervieweeState = {
  ids: [],
  entities: {},
  selectedIntervieweeId: null,
  loading: false,
  loaded: false,
  error: ""
};

export const initialState = intervieweeAdapter.getInitialState(defaultInterviewee);

export function intervieweeReducer(
  state = initialState,
  action: intervieweeActions.Actions
): IntervieweeState {
  switch (action.type) {
    case intervieweeActions.IntervieweeActionTypes.LOAD_INTERVIEWEES_SUCCESS: {
      return intervieweeAdapter.setAll(action.payload, {
        ...state,
        loading: false,
        loaded: true
      });
    }
    case intervieweeActions.IntervieweeActionTypes.LOAD_INTERVIEWEES_FAIL: {
      return {
        ...state,
        entities: {},
        loading: false,
        loaded: false,
        error: action.payload
      };
    }

    case intervieweeActions.IntervieweeActionTypes.LOAD_INTERVIEWEE_SUCCESS: {
      return intervieweeAdapter.addOne(action.payload, {
        ...state,
        selectedIntervieweeId: action.payload.id
      });
    }
    case intervieweeActions.IntervieweeActionTypes.LOAD_INTERVIEWEE_FAIL: {
      return {
        ...state,
        error: action.payload
      };
    }

    case intervieweeActions.IntervieweeActionTypes.CREATE_INTERVIEWEE_SUCCESS: {
      return intervieweeAdapter.addOne(action.payload, state);
    }
    case intervieweeActions.IntervieweeActionTypes.CREATE_INTERVIEWEE_FAIL: {
      return {
        ...state,
        error: action.payload
      };
    }

    case intervieweeActions.IntervieweeActionTypes.UPDATE_INTERVIEWEE_SUCCESS: {
      return intervieweeAdapter.updateOne(action.payload, state);
    }
    case intervieweeActions.IntervieweeActionTypes.UPDATE_INTERVIEWEE_FAIL: {
      return {
        ...state,
        error: action.payload
      };
    }

    case intervieweeActions.IntervieweeActionTypes.DELETE_INTERVIEWEE_SUCCESS: {
      return intervieweeAdapter.removeOne(action.payload, state);
    }
    case intervieweeActions.IntervieweeActionTypes.DELETE_INTERVIEWEE_FAIL: {
      return {
        ...state,
        error: action.payload
      };
    }

    default: {
      return state;
    }
  }
}

const getIntervieweeFeatureState = createFeatureSelector<IntervieweeState>(
  "interviewees"
);

export const getInterviewees = createSelector(
  getIntervieweeFeatureState,
  intervieweeAdapter.getSelectors().selectAll
);

export const getIntervieweesLoading = createSelector(
  getIntervieweeFeatureState,
  (state: IntervieweeState) => state.loading
);

export const getIntervieweesLoaded = createSelector(
  getIntervieweeFeatureState,
  (state: IntervieweeState) => state.loaded
);

export const getError = createSelector(
  getIntervieweeFeatureState,
  (state: IntervieweeState) => state.error
);

export const getCurrentIntervieweeId = createSelector(
  getIntervieweeFeatureState,
  (state: IntervieweeState) => state.selectedIntervieweeId
);
export const getCurrentInterviewee = createSelector(
  getIntervieweeFeatureState,
  getCurrentIntervieweeId,
  state => state.entities[state.selectedIntervieweeId]
);