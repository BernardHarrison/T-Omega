import { Observable } from 'rxjs';

export enum MergeFieldTypes {
    String,
    Number,
    Boolean,
    Date
}

export interface MergeField {
    name: string;
    type: MergeFieldTypes;
}

export interface MergeFieldState {
    list: MergeField[],
    loadingStatus: ApiState,
}

export interface MergeFieldAppState {
    mergeField: MergeFieldState
}

export interface ApiState {
    busy: boolean,
    error: Error
}

export interface MergeFieldApi {
    get(): Observable<MergeField[]>;
    create(mergeField: MergeField): Observable<MergeField[]>;
    update(name: string, mergeField: MergeField): Observable<MergeField[]>;
    delete(mergeField: MergeField): Observable<MergeField[]>;
}
