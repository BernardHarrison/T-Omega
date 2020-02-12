import { Observable } from "rxjs";

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

//reducers

export interface ApiState {
  busy: boolean;
  error: Error;
}

export interface MergeFieldState {
  item: MergeField;
}

export interface MergeFieldsState {
  list: MergeField[];
}

//Reducers Map
export interface MergeFieldAppState {
  merchFields: MergeFieldsState;
  loadingStatus: ApiState;
  merchField: MergeFieldState;
}

// export interface MergeFieldAppState {
//   mergeField: MergeFieldState;
// }

export interface MergeFieldApi {
  get(): Observable<MergeField[]>;
  create(mergeField: MergeField): Observable<MergeField[]>;
  update(name: string, mergeField: MergeField): Observable<MergeField[]>;
  delete(mergeField: MergeField): Observable<MergeField[]>;
}
