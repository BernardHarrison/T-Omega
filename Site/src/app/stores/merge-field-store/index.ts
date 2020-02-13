import { Observable } from "rxjs";
import { ActionReducerMap } from "@ngrx/store";
import { apiReducer, mergeFieldsReducer } from "./merge-field.reducer";

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

export interface MergFieldStates {
  list: MergeField[];
}

export interface MergeFieldState {
  apiState: ApiState;
  mergeFields: MergFieldStates;
}

export const reducers: ActionReducerMap<MergeFieldState> = {
  apiState: apiReducer,
  mergeFields: mergeFieldsReducer
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
