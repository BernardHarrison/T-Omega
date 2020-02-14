import { createAction, props } from "@ngrx/store";
import { ModelDefinition } from ".";

export enum ModelBuilderActionTypes {
  SET_MODELBUILDERS = "[Model Builder] Set the Model Builder collection",

  SET_MODELBUILDER = "[Model Builder] Set the selected Model Builder",

  LOAD = "[Model Builder] Load Model Builders",
  LOAD_BUSY = "[Model Builder] Model Builders are loading",
  LOAD_ERROR = "[Model Builder] Model Builders loading error",

  CREATE = "[Model Builder] Create Model Builder",
  CREATE_BUSY = "[Model Builder] Creating Model Builder",
  CREATE_ERROR = "[Model Builder] Creating Model Builder Error",

  UPDATE = "[Model Builder] Update Model Builder",
  UPDATING_BUSY = "[Model Builder] Updating Model Builder",
  UPDATING_ERROR = "[Model Builder] Updating Model Builder Error",

  DELETE = "[Model Builder] Delete Model Builders",
  DELETING_BUSY = "[Model Builder] Deleting Model Builder",
  DELETING_ERROR = "[Model Builder] Deleting Model Builder Error"
}

export const setModelBuilder = createAction(
  ModelBuilderActionTypes.SET_MODELBUILDER,
  props<{ payload: ModelDefinition }>()
);

export const setModelBuilders = createAction(
  ModelBuilderActionTypes.SET_MODELBUILDERS,
  props<{ payload: ModelDefinition[] }>()
);

export const setModelBuilderLoadBusy = createAction(
  ModelBuilderActionTypes.LOAD_BUSY,
  props<{ payload: boolean }>()
);

export const setModelBuilderLoadError = createAction(
  ModelBuilderActionTypes.LOAD_ERROR,
  props<{ payload: Error }>()
);

export const createModelBuilder = createAction(
  ModelBuilderActionTypes.CREATE,
  props<{ payload: ModelDefinition }>()
);

export const createModelBuilderLoadBusy = createAction(
  ModelBuilderActionTypes.CREATE_BUSY,
  props<{ payload: boolean }>()
);

export const createModelBuilderLoadError = createAction(
  ModelBuilderActionTypes.CREATE_ERROR,
  props<{ payload: Error }>()
);

export const updateModelBuilderLoadBusy = createAction(
  ModelBuilderActionTypes.UPDATING_BUSY,
  props<{ payload: boolean }>()
);

export const updateModelBuilderLoadError = createAction(
  ModelBuilderActionTypes.UPDATING_ERROR,
  props<{ payload: Error }>()
);

export const deleteModelBuilderLoadBusy = createAction(
  ModelBuilderActionTypes.DELETING_BUSY,
  props<{ payload: boolean }>()
);

export const deleteModelBuilderLoadError = createAction(
  ModelBuilderActionTypes.DELETING_ERROR,
  props<{ payload: Error }>()
);
