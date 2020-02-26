import { createAction, props } from "@ngrx/store";

import { MergeField } from "../merge-field-store";
import { MergeObject } from ".";

export enum MergeObjectTypes {
  SET_MERGEOBJECTS = "[Merge Object] Set the Merge Object collection",

  LOAD = "[Merge Object] Load Merge Objects",
  BUSY = "[Merge Object] Merge Object are loading",
  ERROR = "[Merge Object] Merge Object loading error",
  CREATE = "[Merge Object] Create Merge Object",
  UPDATE = "[Merge Object] Update Merge Object",
  DELETE = "[Merge Object] Delete Merge Objects"
}

export const loadMergeObjectsAction = createAction(MergeObjectTypes.LOAD);

export const setMergeObjectsAction = createAction(
  MergeObjectTypes.SET_MERGEOBJECTS,
  props<{ payload: MergeObject[] }>()
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
