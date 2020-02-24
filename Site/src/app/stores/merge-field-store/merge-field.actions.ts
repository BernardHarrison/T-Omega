import { createAction, props } from "@ngrx/store";
import { MergeField } from ".";

export enum MergeFieldActionTypes {
  SET_MERGEFIELDS = "[Merge Field] Set the merge field collection",
  SET_MERGEFIELD = "[Merge Field] Set the selected merge field",

  LOAD = "[Merge Field] Load Merge Fields",
  BUSY = "[Merge Field] Merge fields are loading",
  ERROR = "[Merge Field] Merge fields loading error",

  CREATE = "[Merge Field] Create Merge Field",
  UPDATE = "[Merge Field] Update Merge Field",
  DELETE = "[Merge Field] Delete Merge Fields"
}

export const loadMergeFieldsAction = createAction(MergeFieldActionTypes.LOAD);

export const selectMergeFieldAction = createAction(
  MergeFieldActionTypes.SET_MERGEFIELD,
  props<{ payload: MergeField }>()
);

export const createMergeFieldAction = createAction(
  MergeFieldActionTypes.CREATE,
  props<{ payload: MergeField }>()
);

export const updateMergeFieldAction = createAction(
  MergeFieldActionTypes.UPDATE,
  props<{ payload: MergeField }>()
);

export const deleteMergeFieldAction = createAction(
  MergeFieldActionTypes.DELETE,
  props<{ payload: MergeField }>()
);

export const setMergeFieldsAction = createAction(
  MergeFieldActionTypes.SET_MERGEFIELDS,
  props<{ payload: MergeField[] }>()
);

export const mergeFieldApiBusyAction = createAction(
  MergeFieldActionTypes.BUSY,
  props<{ payload: boolean }>()
);

export const mergeFieldApiErrorAction = createAction(
  MergeFieldActionTypes.ERROR,
  props<{ payload: Error }>()
);
