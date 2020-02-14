import { Action, createReducer, on, State } from "@ngrx/store";
import * as fromIndex from ".";
import * as fromActions from "./merge-field.actions";

export const mergeFieldFeatureKey = "mergeField";

const apiInitialState: fromIndex.ApiState = {
  busy: false,
  error: undefined
};

export const listReducer = createReducer(
  [],
  on(fromActions.setMergeFieldsAction, (state, action) => {
    return action.payload;
  })
);

export const selectedReducer = createReducer(
  null,
  on(fromActions.setMergeFieldAction, (state, action) => {
    return action.payload;
  }),
  on(fromActions.createMergeFieldAction, (state, action) => {
    return action.payload;
  })
);

export const loadingApiReducer = createReducer(
  apiInitialState,
  on(fromActions.mergeFieldLoadBusyAction, (state, action) => {
    return {
      ...state,
      busy: action.payload
    };
  }),
  on(fromActions.mergeFieldLoadErrorAction, (state, action) => {
    return {
      ...state,
      error: action.payload
    };
  })
);

export const createApiReducer = createReducer(
  apiInitialState,
  on(fromActions.createMergeFieldBusyAction, (state, action) => {
    return {
      ...state,
      busy: action.payload
    };
  }),
  on(fromActions.createMergeFieldErrorAction, (state, action) => {
    return {
      ...state,
      error: action.payload
    };
  })
);

export const updateApiReducer = createReducer(
  apiInitialState,
  on(fromActions.updateMergeFieldBusyAction, (state, action) => {
    return {
      ...state,
      busy: action.payload
    };
  }),
  on(fromActions.updateMergeFieldErrorAction, (state, action) => {
    return {
      ...state,
      error: action.payload
    };
  })
);

export const deleteApiReducer = createReducer(
  apiInitialState,
  on(fromActions.deleteMergeFieldBusyAction, (state, action) => {
    return {
      ...state,
      busy: action.payload
    };
  }),
  on(fromActions.deleteMergeFieldErrorAction, (state, action) => {
    return {
      ...state,
      error: action.payload
    };
  })
);
