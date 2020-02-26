import { Action, createReducer, on } from "@ngrx/store";

import * as fromActions from "./merge-object.actions";
import { MergeObjectState } from ".";

export const mergeObjectInitialState: MergeObjectState = {
  list: [],
  item: null,
  error: null,
  busy: false
};

const mergeObjectReducer = createReducer(
  mergeObjectInitialState,
  on(fromActions.setMergeObjectsAction, (state, action) => {
    return {
      ...state,
      list: action.payload
    };
  }),
  on(fromActions.setMergeObjectAction, (state, action) => {
    return {
      ...state,
      item: action.payload
    };
  }),
  on(fromActions.mergeObjectApiBusyAction, (state, action) => {
    return {
      ...state,
      busy: action.payload
    };
  }),
  on(fromActions.mergeObjectApiErrorAction, (state, action) => {
    return {
      ...state,
      error: action.payload
    };
  })
);

export function reducer(state: MergeObjectState | undefined, action: Action) {
  return mergeObjectReducer(state, action);
}
