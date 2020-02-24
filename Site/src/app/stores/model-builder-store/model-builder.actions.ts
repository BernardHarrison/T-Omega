import { createAction, props } from "@ngrx/store";
import { ModelDefinition } from ".";
import { MergeField } from "../merge-field-store";
export enum ModelBuilderActionTypes {
  SET_MODELBUILDERS = "[Model Builder] Set the Model Builder collection",
  SET_MODELBUILDER = "[Model Builder] Set the selected Model Builder",
  LOAD = "[Model Builder] Load Model Builders",
  BUSY = "[Model Builder] Model Builder are loading",
  ERROR = "[Model Builder] Model Builder loading error",
  CREATE = "[Model Builder] Create Model Builder",
  UPDATE = "[Model Builder] Update Model Builder",
  DELETE = "[Model Builder] Delete Model Builders"
}

export const loadModelFieldsAction = createAction(ModelBuilderActionTypes.LOAD);

export const selectModelBuilderAction = createAction(
  ModelBuilderActionTypes.SET_MODELBUILDER,
  props<{ payload: ModelDefinition }>()
);

export const createModelBuilderAction = createAction(
  ModelBuilderActionTypes.CREATE,
  props<{ payload: ModelDefinition }>()
);

export const updateModelBuilderAction = createAction(
  ModelBuilderActionTypes.UPDATE,
  props<{ payload: ModelDefinition }>()
);

export const deleteModelBuilderAction = createAction(
  ModelBuilderActionTypes.DELETE,
  props<{ payload: ModelDefinition }>()
);

export const setModelBuildersAction = createAction(
  ModelBuilderActionTypes.SET_MODELBUILDERS,
  props<{ payload: ModelDefinition[] }>()
);

export const modelBuilderApiBusyAction = createAction(
  ModelBuilderActionTypes.BUSY,
  props<{ payload: boolean }>()
);

export const modelBuilderApiErrorAction = createAction(
  ModelBuilderActionTypes.ERROR,
  props<{ payload: Error }>()
);