import { createAction, props } from "@ngrx/store";

import { MergeField } from "../merge-field-store";
import { MergeObject } from ".";

export enum MergeObjectTypes {
  SET_MERGEOBJECTS = "[Merge Object] Set the Merge Object collection",
  SET_MERGEOBJECT = "[Merge Object] Set the Merge Object item",

  LOAD = "[Merge Object] Load Merge Objects",
  BUSY = "[Merge Object] Merge Object are loading",
  ERROR = "[Merge Object] Merge Object loading error",
  CREATE = "[Merge Object] Create Merge Object",
  UPDATE = "[Merge Object] Update Merge Object",
  DELETE = "[Merge Object] Delete Merge Objects",

  ADD_MERGE_TO_OBJECTS = "[Merge Object] Add Merge Field To Objects",
  REMOVE_MERGE_FROM_OBJECTS = "[Merge Object] Remove Merge Field From Objects",
  RESET_SELECTED_MERGEFIELD = "[Merge Object] Reseting Selected Merge Field"
}

export const loadMergeObjectsAction = createAction(MergeObjectTypes.LOAD);

export const setMergeObjectsAction = createAction(
  MergeObjectTypes.SET_MERGEOBJECTS,
  props<{ payload: MergeObject[] }>()
);

export const addMergeToFieldsAction = createAction(
  MergeObjectTypes.ADD_MERGE_TO_OBJECTS,
  props<{ field: MergeField; model: MergeObject }>()
);

export const removeMergeFromFieldsAction = createAction(
  MergeObjectTypes.REMOVE_MERGE_FROM_OBJECTS,
  props<{ field: MergeField; model: MergeObject }>()
);

export const createMergeObjectAction = createAction(
  MergeObjectTypes.CREATE,
  props<{ payload: MergeObject }>()
);

export const updateMergeObjectAction = createAction(
  MergeObjectTypes.UPDATE,
  props<{ payload: MergeObject }>()
);

export const deleteMergeObjectAction = createAction(
  MergeObjectTypes.DELETE,
  props<{ payload: MergeObject }>()
);

export const mergeObjectApiBusyAction = createAction(
  MergeObjectTypes.BUSY,
  props<{ payload: boolean }>()
);

export const mergeObjectApiErrorAction = createAction(
  MergeObjectTypes.ERROR,
  props<{ payload: Error }>()
);
