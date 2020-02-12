import { createAction, props } from "@ngrx/store";
import { MergeField } from "./merge-field.models";

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
  props<{ mergeFields: MergeField[] }>()
);

export const LoadMergeFields = createAction(
  MergeFieldActionTypes.LOADING_MERGEFIELDS
);

export const LoadingMergeFields = createAction(
  MergeFieldActionTypes.LOADING_MERGEFIELDS,
  props<{ payload: boolean }>()
);

export const LoadingMergeFieldsError = createAction(
  MergeFieldActionTypes.LOADING_MERGEFIELDS_ERROR,
  props<{ payload: Error }>()
);

export const CreateMergeField = createAction(
  MergeFieldActionTypes.CREATE_MERGEFIELD,
  props<{ payload: MergeField }>()
);

export const CreatingMergeField = createAction(
  MergeFieldActionTypes.CREATE_MERGEFIELD,
  props<{ payload: boolean }>()
);

export const CreatingMergeFieldError = createAction(
  MergeFieldActionTypes.CREATING_MERGEFIELD_ERROR,
  props<{ payload: Error }>()
);

export const UpdateMergeField = createAction(
  MergeFieldActionTypes.UPDATE_MERGEFIELD,
  props<{ payload: MergeField }>()
);

export const UpdatingMergeField = createAction(
  MergeFieldActionTypes.UPDATING_MERGEFIELD,
  props<{ payload: boolean }>()
);

export const UpdatingMergeFieldError = createAction(
  MergeFieldActionTypes.UPDATING_MERGEFIELD_ERROR,
  props<{ payload: Error }>()
);

export const DeleteMergeField = createAction(
  MergeFieldActionTypes.DELETE_MERGEFIELD,
  props<{ payload: MergeField }>()
);

export const DeletingMergeField = createAction(
  MergeFieldActionTypes.DELETING_MERGEFIELD,
  props<{ payload: boolean }>()
);

export const DeletingMergeFieldError = createAction(
  MergeFieldActionTypes.DELETING_MERGEFIELD_ERROR,
  props<{ payload: Error }>()
);
