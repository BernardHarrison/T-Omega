import { MergeObjectState } from "./stores/merge-object-store";
import { MergeFieldState } from "./stores/merge-field-store";
import { ModelState } from "./stores/model-store";

export interface AppState {
  mergeObjectState: MergeObjectState;
  mergeField: MergeFieldState;
  modelState: ModelState;
}
