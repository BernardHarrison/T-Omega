import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ApiState, MergeFieldAppState } from "./merge-field.models";
import { mergeFieldFeatureKey } from "./merge-field.reducer";

export const selectStateFeature = createFeatureSelector<MergeFieldAppState>(
  mergeFieldFeatureKey
);

export const selectApiBusy = createSelector(
  selectStateFeature,
  (state: MergeFieldAppState) => state.loadingStatus.busy
);

export const selectAllMergeFields = createSelector(
  selectStateFeature,
  (state: MergeFieldAppState) => state.merchFields.list
);
