import { createAction, props } from "@ngrx/store";
import { MergeField } from ".";

export enum MergeFieldActionTypes {
  SET_MERGEFIELDS = "[Merge Field] Set the merge field collection",

  LOAD_MERGEFIELDS = "[Merge Field] Load Merge Fields",
  LOADING_MERGEFIELDS = "[Merge Field] Merge fields are loading",
  LOADING_MERGEFIELDS_ERROR = "[Merge Field] Merge fields loading error",

  CREATE_MERGEFIELD = "[Merge Field] Create Merge Field",
  CREATING_MERGEFIELD = "[Merge Field] Creating Merge Field",
  CREATING_MERGEFIELD_ERROR = "[Merge Field] Creating Merge Field Error",

  UPDATE_MERGEFIELD = "[Merge Field] Update Merge Field",
  UPDATING_MERGEFIELD = "[Merge Field] Updating Merge Field",
  UPDATING_MERGEFIELD_ERROR = "[Merge Field] Updating Merge Field Error",

  DELETE_MERGEFIELD = "[Merge Field] Delete Merge Fields",
  DELETING_MERGEFIELD = "[Merge Field] Deleting Merge Field",
  DELETING_MERGEFIELD_ERROR = "[Merge Field] Deleting Merge Field Error"
}

export const SetMergeFields = createAction(
  MergeFieldActionTypes.SET_MERGEFIELDS,
  props<{ payload: MergeField[] }>()
);

export const loadingMergeFields = createAction(
  MergeFieldActionTypes.LOADING_MERGEFIELDS,
  props<{ payload: boolean }>()
);

export const loadingMergeFieldsError = createAction(
  MergeFieldActionTypes.LOADING_MERGEFIELDS_ERROR,
  props<{ payload: Error }>()
);
