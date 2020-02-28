import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromMergeObjectFeature from './merge-object-feature.reducer';

export const selectMergeObjectFeatureState = createFeatureSelector<fromMergeObjectFeature.State>(
  fromMergeObjectFeature.mergeObjectFeatureFeatureKey
);
