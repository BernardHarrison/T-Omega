import { createAction, props } from "@ngrx/store";
import { MergeModel } from ".";
import { MergeField } from "../merge-field-store";

export enum ModelTypes {
  SET_MODELS = "[Model] Set the Model collection",
  SET_MODEL = "[Model] Set the Model item",

  LOAD = "[Model] Load Models",
  BUSY = "[Model] Model are loading",
  ERROR = "[Model] Model loading error",
  CREATE = "[Model] Create Model",
  UPDATE = "[Model] Update Model",
  DELETE = "[Model] Delete Models",

  ADD_OBJECT_TO_MODEL = "[Model] Add Model To Objects",

  ADD_MERGE_TO_MODEL = "[Model] Add Merge Field To Objects",
  REMOVE_MERGE_FROM_MODEL = "[Model] Remove Merge Field From Objects",
  RESET_SELECTED_MERGEFIELD = "[Model] Reseting Selected Merge Field"
}

export const loadModelsAction = createAction(ModelTypes.LOAD);

export const setModelsAction = createAction(
  ModelTypes.SET_MODELS,
  props<{ payload: MergeModel[] }>()
);

export const setModelAction = createAction(
  ModelTypes.SET_MODEL,
  props<{ payload: MergeModel }>()
);

export const createModelAction = createAction(
  ModelTypes.CREATE,
  props<{ payload: MergeModel }>()
);

export const updateModelAction = createAction(
  ModelTypes.UPDATE,
  props<{ payload: MergeModel }>()
);

export const deleteModelAction = createAction(
  ModelTypes.DELETE,
  props<{ payload: MergeModel }>()
);

export const modelApiBusyAction = createAction(
  ModelTypes.BUSY,
  props<{ payload: boolean }>()
);

export const modelApiErrorAction = createAction(
  ModelTypes.ERROR,
  props<{ payload: Error }>()
);
