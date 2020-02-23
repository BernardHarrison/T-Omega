import { Observable } from "rxjs";
import { InjectionToken } from "@angular/core";

export const mergeFieldFeatureKey = "mergeField";

export enum MergeFieldTypes {
  String,
  Number,
  Boolean,
  Date
}

export class MergeField {
  id: number | null;
  name: string;
  type: string;
}

export interface MergeFieldState {
  list: MergeField[];
  busy: boolean;
  error: Error;
}

export interface MergeFieldAppState {
  mergeField: MergeFieldState;
}

export const initialMergeFieldState: MergeFieldState = {
  list: [],
  busy: false,
  error: null
};

export interface IMergeFieldApi {
  get(): Observable<MergeField[]>;
  update(entity: MergeField): Observable<MergeField[]>;
  create(entity: MergeField): Observable<MergeField[]>;
  delete(entity: MergeField): Observable<MergeField[]>;
}

export const MERGE_FIELD_STORE_API = new InjectionToken<IMergeFieldApi>(
  "MERGE_FIELD_STORE_API"
);
