import { Action, createReducer, on } from "@ngrx/store";
import { ModelBuilderState } from ".";
import * as fromActions from "./model-builder.actions";

export const modelBuilderInitialState: ModelBuilderState = {
  list: [],
  error: null,
  busy: false
};

const modelBuilderReducer = createReducer(
  modelBuilderInitialState,
  on(fromActions.setModelBuildersAction, (state, action) => {
    return {
      ...state,
      list: action.payload
    };
  }),
  on(fromActions.modelBuilderApiBusyAction, (state, action) => {
    return {
      ...state,
      busy: action.payload
    };
  }),
  on(fromActions.modelBuilderApiErrorAction, (state, action) => {
    return {
      ...state,
      error: action.payload
    };
  })
);

export function reducer(state: ModelBuilderState | undefined, action: Action) {
  return modelBuilderReducer(state, action);
}
