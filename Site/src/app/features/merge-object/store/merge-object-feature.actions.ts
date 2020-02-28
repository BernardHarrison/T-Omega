import { createAction, props } from '@ngrx/store';

export const loadMergeObjectFeatures = createAction(
  '[MergeObjectFeature] Load MergeObjectFeatures'
);

export const loadMergeObjectFeaturesSuccess = createAction(
  '[MergeObjectFeature] Load MergeObjectFeatures Success',
  props<{ data: any }>()
);

export const loadMergeObjectFeaturesFailure = createAction(
  '[MergeObjectFeature] Load MergeObjectFeatures Failure',
  props<{ error: any }>()
);
