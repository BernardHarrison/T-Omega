import { Observable } from "rxjs";
import { ActionReducerMap } from "@ngrx/store";
import {
  apiReducer,
  mergeFieldsReducer,
  createdMergeFieldsReducer
} from "./merge-field.reducer";

export enum MergeFieldTypes {
  String,
  Number,
  Boolean,
  Date
}

//model
export interface MergeField {
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
  apiState: ApiState;
  mergeFields: MergeFieldStates;
  createdMergeField: CreatedMergeFieldState;
}

export const reducers: ActionReducerMap<MergeFieldState> = {
  apiState: apiReducer,
  mergeFields: mergeFieldsReducer,
  createdMergeField: createdMergeFieldsReducer
};

export interface MergeFieldAppState {
  mergeField: MergeFieldState;
}

export interface MergeFieldApi {
  get(): Observable<MergeField[]>;
  create(mergeField: MergeField): Observable<MergeField[]>;
  update(name: string, mergeField: MergeField): Observable<MergeField[]>;
  delete(mergeField: MergeField): Observable<MergeField[]>;
}
