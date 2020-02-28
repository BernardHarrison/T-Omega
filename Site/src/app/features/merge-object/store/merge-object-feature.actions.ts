import { createAction, props } from "@ngrx/store";
import { MergeObject } from "src/app/stores/merge-object-store";
import { MergeField } from "src/app/stores/merge-field-store";

export const selectedMergeObject = createAction(
  "[MergeObjectFeature] Selected Merge Object",
  props<{ payload: MergeObject }>()
);

export const gettingNotSelectedMergeFields = createAction(
  "[MergeObjectFeature] Getting Merge Fields Not Selected",
  props<{ selectedFields: MergeField[]; fieldOptions: MergeField[] }>()
);

export const setNotSelectedMergeFields = createAction(
  "[MergeObjectFeature] Set Merge Fields Not Selected",
  props<{ notSelectedFields: MergeField[] }>()
);

export const updateSelectedItem = createAction(
  "[MergeObjectFeature] Update Selected Merge Object",
  props<{ mergeObjId: number; listMergeObjects: MergeObject[] }>()
);
