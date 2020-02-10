import { Action, createReducer, on, State } from "@ngrx/store";
import {
  ApiState,
  MergeFieldState,
  MergeFieldAppState,
  MergeField
} from "./merge-field.models";
import * as fromActions from "./merge-field.actions";

export const mergeFieldFeatureKey = "mergeField";

const initialState: MergeFieldState = {
  list: undefined,
  loadingStatus: undefined
};

const initialApiState: ApiState = {
  busy: false,
  error: undefined
};

const initialMerchFieldState: MergeField = {
  name: undefined,
  type: undefined
};

const mergeFieldsReducer = createReducer(
  initialState,
  on(fromActions.SetMergeFields, (state, action) => {
    return {
      ...state,
      list: action.mergeFields
    };
  })
);

const mergeFieldReducer = createReducer(
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

const mergeFieldApiReducer = createReducer(
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
