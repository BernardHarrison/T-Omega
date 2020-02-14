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
  on(fromActions.setMergeFields, (state, action) => {
    return action.payload;
  })
);

export const selectedReducer = createReducer(
  null,
  on(fromActions.setMergeField, (state, action) => {
    return action.payload;
  }),
  on(fromActions.createMergeField, (state, action) => {
    return action.payload;
  })
);

export const loadingApiReducer = createReducer(
  apiInitialState,
  on(fromActions.setMergeFieldLoadBusy, (state, action) => {
    return {
      ...state,
      busy: action.payload
    };
  }),
  on(fromActions.setMergeFieldLoadError, (state, action) => {
    return {
      ...state,
      error: action.payload
    };
  })
);

export const createApiReducer = createReducer(
  apiInitialState,
  on(fromActions.createMergeFieldLoadBusy, (state, action) => {
    return {
      ...state,
      busy: action.payload
    };
  }),
  on(fromActions.createMergeFieldLoadError, (state, action) => {
    return {
      ...state,
      error: action.payload
    };
  })
);

export const updateApiReducer = createReducer(
  apiInitialState,
  on(fromActions.updateMergeFieldLoadBusy, (state, action) => {
    return {
      ...state,
      busy: action.payload
    };
  }),
  on(fromActions.updateMergeFieldLoadError, (state, action) => {
    return {
      ...state,
      error: action.payload
    };
  })
);

export const deleteApiReducer = createReducer(
  apiInitialState,
  on(fromActions.deleteMergeFieldLoadBusy, (state, action) => {
    return {
      ...state,
      busy: action.payload
    };
  }),
  on(fromActions.deleteMergeFieldLoadError, (state, action) => {
    return {
      ...state,
      error: action.payload
    };
  })
);
