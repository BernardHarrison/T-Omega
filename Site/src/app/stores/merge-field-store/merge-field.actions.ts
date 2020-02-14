import { createAction, props } from "@ngrx/store";
import { MergeField } from ".";

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

export const loadMergeFieldsAction = createAction(
  MergeFieldActionTypes.LOAD
);

export const setMergeField = createAction(
  MergeFieldActionTypes.SET_MERGEFIELD,
  props<{ payload: MergeField }>()
);

export const setMergeFields = createAction(
  MergeFieldActionTypes.SET_MERGEFIELDS,
  props<{ payload: MergeField[] }>()
);

export const setMergeFieldLoadBusy = createAction(
  MergeFieldActionTypes.LOAD_BUSY,
  props<{ payload: boolean }>()
);

export const setMergeFieldLoadError = createAction(
  MergeFieldActionTypes.LOAD_ERROR,
  props<{ payload: Error }>()
);

export const createMergeField = createAction(
  MergeFieldActionTypes.CREATE,
  props<{ payload: MergeField }>()
);

export const createMergeFieldLoadBusy = createAction(
  MergeFieldActionTypes.CREATE_BUSY,
  props<{ payload: boolean }>()
);

export const createMergeFieldLoadError = createAction(
  MergeFieldActionTypes.CREATE_ERROR,
  props<{ payload: Error }>()
);

export const updateMergeFieldLoadBusy = createAction(
  MergeFieldActionTypes.UPDATING_BUSY,
  props<{ payload: boolean }>()
);

export const updateMergeFieldLoadError = createAction(
  MergeFieldActionTypes.UPDATING_ERROR,
  props<{ payload: Error }>()
);

export const deleteMergeFieldLoadBusy = createAction(
  MergeFieldActionTypes.DELETING_BUSY,
  props<{ payload: boolean }>()
);

export const deleteMergeFieldLoadError = createAction(
  MergeFieldActionTypes.DELETING_ERROR,
  props<{ payload: Error }>()
);
