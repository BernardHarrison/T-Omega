import { Observable } from "rxjs";
import { ActionReducerMap } from "@ngrx/store";
import * as fromReducers from "./merge-field.reducer";
import { MergeFieldActionTypes } from "./merge-field.actions";
import { InjectionToken } from "@angular/core";
import { Identifiers } from "@angular/compiler";

export const MAILING_ACTIVITY_API = new InjectionToken<MergeFieldApiInterface>(
  "MERGEFIELD_API_TOKEN"
);

export enum MergeFieldTypes {
  String,
  Number,
  Boolean,
  Date
}

export class MergeField {
  id: number | null;
  name: string;
  type: MergeFieldTypes;
}

export interface ApiState {
  busy: boolean;
  error: Error;
}

export interface MergeFieldStates {
  list: MergeField[];
}

export interface CreatedMergeFieldState {
  mergeField: MergeField;
}

export interface MergeFieldState {
  list: MergeField[];
  selected: MergeField;
  loadApiState: ApiState;
  createApiState: ApiState;
  updateApiState: ApiState;
  deleteApiState: ApiState;
}

export const reducers: ActionReducerMap<MergeFieldState> = {
  list: fromReducers.listReducer,
  selected: fromReducers.selectedReducer,
  loadApiState: fromReducers.loadingApiReducer,
  createApiState: fromReducers.createApiReducer,
  updateApiState: fromReducers.updateApiReducer,
  deleteApiState: fromReducers.deleteApiReducer
};

export interface MergeFieldAppState {
  mergeField: MergeFieldState;
}

export interface MergeFieldApiInterface {
  get(): Observable<MergeField[]>;
  create(mergeField: MergeField): Observable<MergeField[]>;
  update(name: string, mergeField: MergeField): Observable<MergeField[]>;
  delete(mergeField: MergeField): Observable<MergeField[]>;
}
