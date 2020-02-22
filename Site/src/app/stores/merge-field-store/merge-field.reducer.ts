import { Action, createReducer, on } from "@ngrx/store";
import * as fromActions from "./merge-field.actions";

export const mergeFieldFeatureKey = "mergeField";

export enum MergeFieldTypes {
  String,
  Number,
  Boolean,
  Date
}

export class MergeField {
  id: number | null;
  name: string;
  type: string;
}

export interface MergeFieldState {
  list: MergeField[];
  busy: boolean;
  error: Error;
}

export const initialState: MergeFieldState = {
  list: [],
  busy: false,
  error: null
};

const mergeFieldReducer = createReducer(
  initialState,
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
