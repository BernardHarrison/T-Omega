import { Action, createReducer, on } from "@ngrx/store";
import * as MergeObjectFeatureActions from "./merge-object-feature.actions";
import { MergeObject } from "src/app/stores/merge-object-store";
import { MergeObjectFeatureState } from ".";

export const mergeObjectFeatureFeatureKey = "mergeObjectFeature";

export const initialState: MergeObjectFeatureState = {
  selectedMergeObject: null,
  notSelectedMergeFields: null
};

const mergeObjectFeatureReducer = createReducer(
  initialState,

  on(MergeObjectFeatureActions.selectedMergeObject, (state, action) => {
    return {
      ...state,
      selectedMergeObject: action.payload
    };
  }),
  on(MergeObjectFeatureActions.setNotSelectedMergeFields, (state, action) => {
    return {
      ...state,
      notSelectedMergeFields: action.notSelectedFields
    };
  })
  // on(
  //   MergeObjectFeatureActions.loadMergeObjectFeaturesFailure,
  //   (state, action) => state
  // )
);

export function reducer(
  state: MergeObjectFeatureState | undefined,
  action: Action
) {
  return mergeObjectFeatureReducer(state, action);
}
