import { MergeObjectState } from "./stores/merge-object-store";
import { MergeFieldState } from "./stores/merge-field-store";
import { MergeObjectFeatureState } from "./features/merge-object/store";

export interface AppState {
  mergeObjectState: MergeObjectState;
  mergeObjectFeature: MergeObjectFeatureState;
  mergeField: MergeFieldState;
}
