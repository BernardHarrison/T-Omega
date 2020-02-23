import { createAction, props } from "@ngrx/store";
import { MergeField } from "../merge-field-api-store/merge-field-api-store.module";

export enum MergeFieldActionTypes {
  SET_MERGEFIELDS = "[Merge Field] Set the merge field collection",

  SET_MERGEFIELD = "[Merge Field] Set the selected merge field",

  LOAD = "[Merge Field] Load Merge Fields",
  LOAD_BUSY = "[Merge Field] Merge fields are loading",
  LOAD_ERROR = "[Merge Field] Merge fields loading error",

  CREATE = "[Merge Field] Create Merge Field",
  CREATE_BUSY = "[Merge Field] Creating Merge Field",
  CREATE_ERROR = "[Merge Field] Creating Merge Field Error",

  UPDATE = "[Merge Field] Update Merge Field",
  UPDATING_BUSY = "[Merge Field] Updating Merge Field",
  UPDATING_ERROR = "[Merge Field] Updating Merge Field Error",

  DELETE = "[Merge Field] Delete Merge Fields",
  DELETING_BUSY = "[Merge Field] Deleting Merge Field",
  DELETING_ERROR = "[Merge Field] Deleting Merge Field Error"
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
  MergeFieldActionTypes.LOAD_BUSY,
  props<{ payload: boolean }>()
);

export const mergeFieldApiErrorAction = createAction(
  MergeFieldActionTypes.LOAD_ERROR,
  props<{ payload: Error }>()
);
