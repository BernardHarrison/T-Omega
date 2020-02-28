import { Action, createReducer, on } from '@ngrx/store';
import * as MergeObjectFeatureActions from './merge-object-feature.actions';

export const mergeObjectFeatureFeatureKey = 'mergeObjectFeature';

export interface State {

}

export const initialState: State = {

};

const mergeObjectFeatureReducer = createReducer(
  initialState,

  on(MergeObjectFeatureActions.loadMergeObjectFeatures, state => state),
  on(MergeObjectFeatureActions.loadMergeObjectFeaturesSuccess, (state, action) => state),
  on(MergeObjectFeatureActions.loadMergeObjectFeaturesFailure, (state, action) => state),

);

export function reducer(state: State | undefined, action: Action) {
  return mergeObjectFeatureReducer(state, action);
}
