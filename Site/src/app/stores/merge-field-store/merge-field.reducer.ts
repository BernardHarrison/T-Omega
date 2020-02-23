import { Action, createReducer, on } from "@ngrx/store";
import * as fromActions from "./merge-field.actions";
import { MergeFieldState, initialMergeFieldState } from ".";

const mergeFieldReducer = createReducer(
  initialMergeFieldState,
  on(fromActions.setMergeFieldsAction, (state, action) => {
    return {
      ...state,
      list: action.payload
    };
  }),
  on(fromActions.mergeFieldApiBusyAction, (state, action) => {
    return {
      ...state,
      busy: action.payload
    };
  }),
  on(fromActions.mergeFieldApiErrorAction, (state, action) => {
    return {
      ...state,
      error: action.payload
    };
  })
);

export function reducer(state: MergeFieldState | undefined, action: Action) {
  return mergeFieldReducer(state, action);
}
