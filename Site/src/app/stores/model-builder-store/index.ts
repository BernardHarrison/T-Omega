import { Observable } from "rxjs";
import { ActionReducerMap } from "@ngrx/store";
import { MergeField } from "../merge-field-store";

import * as fromReducers from "./model-builder.reducer";

export const modelBuilderFeatureKey = "modelBuilder";

export enum ModelBuilderTypes {
  String,
  Number,
  Boolean,
  Date
}

export interface MergeObject {
  name: string;
  field: Array<MergeField>;
}
export interface ModelDefinition {
  id: number;
  field: Array<MergeField | MergeObject>;
}

export interface ApiState {
  busy: boolean;
  error: Error;
}

export interface ModelBuilderState {
  list: ModelDefinition[];
  selected: ModelDefinition;
  loadApiState: ApiState;
  createApiState: ApiState;
  updateApiState: ApiState;
  deleteApiState: ApiState;
}

export const reducers: ActionReducerMap<ModelBuilderState> = {
  list: fromReducers.listReducer,
  selected: fromReducers.selectedReducer,
  loadApiState: fromReducers.loadingApiReducer,
  createApiState: fromReducers.createApiReducer,
  updateApiState: fromReducers.updateApiReducer,
  deleteApiState: fromReducers.deleteApiReducer
};

export interface ModelBuilderAppState {
  modelBuilder: ModelBuilderState;
}

export interface ModelBuilderApi {
  get(): Observable<ModelDefinition[]>;
  create(modelBuilder: ModelDefinition): Observable<ModelDefinition[]>;
  update(
    name: string,
    modelBuilder: ModelDefinition
  ): Observable<ModelDefinition[]>;
  delete(modelBuilder: ModelDefinition): Observable<ModelDefinition[]>;
}
