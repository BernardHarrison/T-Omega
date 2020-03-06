import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from "@ngrx/store";
import { MergeField, MergeFieldState } from "../merge-field-store";
import { Observable } from "rxjs";
import { InjectionToken } from "@angular/core";
import { MergeObject } from '../merge-object-store';

//1) Define a key for this store
export const MODEL_KEY = "modelState";

export class MergeModel {
  id: number;
  title: string;
  objects: Array<MergeObject>;
  fields: Array<MergeField>;
}

export interface ModelState {
  list: MergeModel[];
  item: MergeModel;
  error: Error;
  busy: boolean;
}
//3) Wrap the model with an app state. NOTE: The property name must
// be the same as the string used for the key in step #1 !!
export class ModelAppState {
  modelState: ModelState;
}

export interface IModelObjectApi {
  get(): Observable<MergeModel[]>;
  create(entity: MergeModel): Observable<MergeModel[]>;
  update(entity: MergeModel): Observable<MergeModel[]>;
  delete(entity: MergeModel): Observable<MergeModel[]>;
}

export const MODEL_STORE_API = new InjectionToken<IModelObjectApi>(
  "MODEL_STORE_API"
);
