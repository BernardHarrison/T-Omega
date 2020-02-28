import { MergeObject } from "src/app/stores/merge-object-store";
import { MergeField } from "src/app/stores/merge-field-store";

export interface MergeObjectFeatureState {
  selectedMergeObject: MergeObject;
  notSelectedMergeFields: MergeField[];
}

export class MergeObjectAppState {
  mergeObjectFeature: MergeObjectFeatureState;
}
