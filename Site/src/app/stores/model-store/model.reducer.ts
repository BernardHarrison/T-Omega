import { Action, createReducer, on } from "@ngrx/store";
import { MergeModel, ModelState } from ".";
import * as fromActions from "./model.actions";

export const modelInitialState: ModelState = {
  list: [],
  item: null,
  error: null,
  busy: false
};

const modelReducer = createReducer(
  modelInitialState,
  on(fromActions.setModelsAction, (state, action) => {
    return {
      ...state,
      list: action.payload
    };
  }),
  on(fromActions.setModelAction, (state, action) => {
    return {
      ...state,
      item: action.payload
    };
  }),
  on(fromActions.modelApiBusyAction, (state, action) => {
    return {
      ...state,
      busy: action.payload
    };
  }),
  on(fromActions.modelApiErrorAction, (state, action) => {
    return {
      ...state,
      error: action.payload
    };
  })
);

export function reducer(state: ModelState | undefined, action: Action) {
  return modelReducer(state, action);
}
