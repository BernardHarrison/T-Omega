import { Action, createReducer, on, State } from "@ngrx/store";
import * as fromIndex from ".";
import * as fromActions from "./merge-field.actions";

export const mergeFieldFeatureKey = "mergeField";

const initialMerchFieldStates: fromIndex.MergFieldStates = {
  list: undefined
};

const apiInitialState: fromIndex.ApiState = {
  busy: false,
  error: undefined
};

export const apiReducer = createReducer(
  apiInitialState,
  on(fromActions.loadingMergeFields, (state, action) => {
    return {
      ...state,
      busy: action.payload
    };
  }),
  on(fromActions.loadingMergeFieldsError, (state, action) => {
    return {
      ...state,
      error: action.payload
    };
  })
);

export const mergeFieldsReducer = createReducer(
  initialMerchFieldStates,
  on(fromActions.SetMergeFields, (state, action) => {
    return {
      ...state,
      list: action.payload
    };
  })
);
