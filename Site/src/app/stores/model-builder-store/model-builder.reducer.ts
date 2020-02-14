import { Action, createReducer, on, State } from "@ngrx/store";
import * as fromIndex from ".";
import * as fromActions from "./model-builder.actions";

const apiInitialState: fromIndex.ApiState = {
  busy: false,
  error: undefined
};

export const listReducer = createReducer(
  [],
  on(fromActions.setModelBuilders, (state, action) => {
    return action.payload;
  })
);

export const selectedReducer = createReducer(
  null,
  on(fromActions.setModelBuilder, (state, action) => {
    return action.payload;
  }),
  on(fromActions.createModelBuilder, (state, action) => {
    return action.payload;
  })
);

export const loadingApiReducer = createReducer(
  apiInitialState,
  on(fromActions.setModelBuilderLoadBusy, (state, action) => {
    return {
      ...state,
      busy: action.payload
    };
  }),
  on(fromActions.setModelBuilderLoadError, (state, action) => {
    return {
      ...state,
      error: action.payload
    };
  })
);

export const createApiReducer = createReducer(
  apiInitialState,
  on(fromActions.createModelBuilderLoadBusy, (state, action) => {
    return {
      ...state,
      busy: action.payload
    };
  }),
  on(fromActions.createModelBuilderLoadError, (state, action) => {
    return {
      ...state,
      error: action.payload
    };
  })
);

export const updateApiReducer = createReducer(
  apiInitialState,
  on(fromActions.updateModelBuilderLoadBusy, (state, action) => {
    return {
      ...state,
      busy: action.payload
    };
  }),
  on(fromActions.updateModelBuilderLoadError, (state, action) => {
    return {
      ...state,
      error: action.payload
    };
  })
);

export const deleteApiReducer = createReducer(
  apiInitialState,
  on(fromActions.deleteModelBuilderLoadBusy, (state, action) => {
    return {
      ...state,
      busy: action.payload
    };
  }),
  on(fromActions.deleteModelBuilderLoadError, (state, action) => {
    return {
      ...state,
      error: action.payload
    };
  })
);
