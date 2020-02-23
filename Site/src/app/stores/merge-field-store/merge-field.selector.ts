import { createFeatureSelector, createSelector } from "@ngrx/store";
import { MergeFieldState, mergeFieldFeatureKey } from "./merge-field.reducer";

export const mergeFieldState = createFeatureSelector<MergeFieldState>(
  mergeFieldFeatureKey
);

export const selectMergeFields = createSelector(
  mergeFieldState,
  (state: MergeFieldState) => state.list
);
