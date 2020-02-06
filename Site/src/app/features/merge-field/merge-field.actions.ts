import { Action } from "@ngrx/store";
import { MergeField } from '.';

export enum MergeFieldActionTypes {
    SET_MERGEFIELDS = "[Merge Field] Set the merge field collection",

    LOAD_MERGEFIELD = "[Merge Field] Load Merge Fields",
    LOADING_MERGEFIELD = "[Merge Field] Merge fields are loading",
    LOADING_MERGEFIELD_ERROR = "[Merge Field] Merge fields loading error",

    CREATE_MERGEFIELD = "[Merge Field] Create Merge Field",
    CREATING_MERGEFIELD = "[Merge Field] Creating Merge Field",
    CREATING_MERGEFIELD_ERROR = "[Merge Field] Creating Merge Field Error",

    UPDATE_MERGEFIELD = "[Merge Field] Update Merge Field",
    UPDATING_MERGEFIELD = "[Merge Field] Updating Merge Field",
    UPDATING_MERGEFIELD_ERROR = "[Merge Field] Updating Merge Field Error",

    DELETE_MERGEFIELD = "[Merge Field] Delete Merge Fields",
    DELETING_MERGEFIELD = "[Merge Field] Deleting Merge Field",
    DELETING_MERGEFIELD_ERROR = "[Merge Field] Deleting Merge Field Error",

}

export class SetMergeFields implements Action {
    readonly type = MergeFieldActionTypes.SET_MERGEFIELDS;
    constructor(public payload: MergeField[]) { }
}

export class LoadMergeFields implements Action {
    readonly type = MergeFieldActionTypes.LOAD_MERGEFIELD;
    readonly payload = null;
}

export class LoadingMergeFields implements Action {
    readonly type = MergeFieldActionTypes.LOADING_MERGEFIELD;
    constructor(public payload: boolean) { }
}

export class LoadingMergeFieldsError implements Action {
    readonly type = MergeFieldActionTypes.LOADING_MERGEFIELD_ERROR;
    constructor(public payload: Error) { }
}

export class CreateMergeField implements Action {
    readonly type = MergeFieldActionTypes.CREATE_MERGEFIELD;
    constructor(public payload: MergeField) { }
}

export class CreatingMergeField implements Action {
    readonly type = MergeFieldActionTypes.CREATING_MERGEFIELD
    constructor(public payload: boolean) { }
}

export class CreatingMergeFieldError implements Action {
    readonly type = MergeFieldActionTypes.CREATING_MERGEFIELD_ERROR;
    constructor(public payload: Error) { }
}

export class UpdateMergeField implements Action {
    readonly type = MergeFieldActionTypes.UPDATE_MERGEFIELD;
    constructor(public payload: { name: string, mergeField: MergeField }) { }
}

export class UpdatingMergeField implements Action {
    readonly type = MergeFieldActionTypes.UPDATING_MERGEFIELD;
    constructor(public payload: boolean) { }
}

export class UpdatingMergeFieldError implements Action {
    readonly type = MergeFieldActionTypes.UPDATING_MERGEFIELD_ERROR;
    constructor(public payload: Error) { }
}

export class DeleteMergeField implements Action {
    readonly type = MergeFieldActionTypes.DELETE_MERGEFIELD;
    constructor(public payload: MergeField) { }
}

export class DeletingMergeField implements Action {
    readonly type = MergeFieldActionTypes.DELETING_MERGEFIELD;
    constructor(public payload: boolean) { }
}

export class DeletingMergeFieldError implements Action {
    readonly type = MergeFieldActionTypes.DELETING_MERGEFIELD_ERROR;
    constructor(public payload: Error) { }
}


export type MergeFieldAction =
    LoadMergeFields
    | SetMergeFields
    | LoadMergeFields
    | LoadingMergeFields
    | LoadingMergeFieldsError
    | CreateMergeField
    | CreatingMergeField
    | CreatingMergeFieldError
    | UpdateMergeField
    | UpdatingMergeField
    | UpdatingMergeFieldError
    | DeleteMergeField
    | DeletingMergeField
    | DeletingMergeFieldError

