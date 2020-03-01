import { MergeObjectState } from "./stores/merge-object-store";
import { MergeFieldState } from "./stores/merge-field-store";

export interface AppState {
  mergeObjectState: MergeObjectState;
  mergeField: MergeFieldState;
}
