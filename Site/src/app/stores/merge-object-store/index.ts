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

//1) Define a key for this store
export const MERGE_OBJECT_KEY = "mergeObjectState";

//2) Define the model for this store
export class MergeObject {
  id: number | null;
  fieldName: string;
  objects: Array<MergeObject>;
  fields: Array<MergeField>;
}

export interface MergeObjectState {
  list: MergeObject[];
  item: MergeObject;
  error: Error;
  busy: boolean;
}
//3) Wrap the model with an app state. NOTE: The property name must
// be the same as the string used for the key in step #1 !!
export class MergeObjectAppState {
  mergeObjectState: MergeObjectState;
}

export interface IMergeObjectApi {
  get(): Observable<MergeObject[]>;
  update(entity: MergeObject): Observable<MergeObject[]>;
  create(entity: MergeObject): Observable<MergeObject[]>;
  delete(entity: MergeObject): Observable<MergeObject[]>;
  addField(field: MergeField, model: MergeObject): Observable<MergeObject>;
  addObject(field: string, model: MergeObject): Observable<MergeObject>;
  removeField(field: MergeField, model: MergeObject): Observable<MergeObject[]>;
}

export const MERGE_OBJECT_STORE_API = new InjectionToken<IMergeObjectApi>(
  "MERGE_OBJECT_STORE_API"
);
