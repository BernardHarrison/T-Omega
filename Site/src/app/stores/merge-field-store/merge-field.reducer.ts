import { Action, createReducer, on, State } from "@ngrx/store";
import {
  ApiState,
  MergeFieldState,
  MergeFieldAppState,
  MergeField,
  MergeFieldsState
} from "./merge-field.models";
import * as fromActions from "./merge-field.actions";

export const mergeFieldFeatureKey = "mergeField";

const initialMerchFieldStates: MergeFieldsState = {
  list: undefined
};

const initialApiState: ApiState = {
  busy: false,
  error: undefined
};

const initialMerchFieldState: MergeFieldState = {
  item: undefined
};

export const mergeFieldsReducer = createReducer(
  initialMerchFieldStates,
  on(fromActions.SetMergeFields, (state, action) => {
    return {
      ...state,
      list: action.mergeFields
    };
  })
);

export const mergeFieldReducer = createReducer(
  initialMerchFieldState,
  on(fromActions.CreateMergeField, (state, action) => {
    return {
      ...state,
      mergeField: action.payload
    };
  }),
  on(fromActions.UpdateMergeField, (state, action) => {
    return {
      ...state,
      mergeField: action.payload
    };
  }) //We might not need this
  // on(fromActions.DeleteMergeField, (state, action) => {
  //   return {
  //     ...state,
  //     mergeField: action.payload
  //   };
  // })
);

export const mergeFieldApiReducer = createReducer(
  initialApiState,
  on(fromActions.LoadingMergeFields, (state, action) => {
    return {
      ...state,
      busy: action.payload
    };
  }),
  on(fromActions.LoadingMergeFieldsError, (state, action) => {
    return {
      ...state,
      error: action.payload
    };
  }),
  on(fromActions.CreatingMergeField, (state, action) => {
    return {
      ...state,
      busy: action.payload
    };
  }),
  on(fromActions.CreatingMergeFieldError, (state, action) => {
    return {
      ...state,
      error: action.payload
    };
  }),
  on(fromActions.UpdatingMergeField, (state, action) => {
    return {
      ...state,
      busy: action.payload
    };
  }),
  on(fromActions.UpdatingMergeFieldError, (state, action) => {
    return {
      ...state,
      error: action.payload
    };
  }),
  on(fromActions.DeletingMergeField, (state, action) => {
    return {
      ...state,
      busy: action.payload
    };
  }),
  on(fromActions.DeletingMergeFieldError, (state, action) => {
    return {
      ...state,
      error: action.payload
    };
  })
);

// export function reducer(state: State | undefined, action: Action) {
//   return mergeFieldReducer(state, action);
// }
