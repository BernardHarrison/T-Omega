import { ActionReducerMap, Action } from '@ngrx/store';
import { Observable } from 'rxjs';

const apiInitialState: CrudApiState = { busy: false, error: undefined }

export interface CrudApiState{
    busy: boolean;
    error: Error;
}

export interface ApiEntityState<T> {
    list: T[];
    loadApiState: CrudApiState;
    createApiState: CrudApiState;
    updateApiState: CrudApiState;
    deleteApiState: CrudApiState;
}

export class CrudApiStateActions<T>{

    constructor(private stateKeyName: string){  }

    get setCollectionAction() { return `[${this.stateKeyName}] Set the array`; }

    get loadAction() { return `[${this.stateKeyName}] Load the array`;}
    get loadBusyAction() { return `[${this.stateKeyName}] Set loading busy`;}
    get loadErrorAction() { return `[${this.stateKeyName}] Set loading error`;}

    get createAction() { return `[${this.stateKeyName}] Create entity`;}
    get createBusyAction() { return `[${this.stateKeyName}] Set creating busy`;}
    get createErrorAction() { return `[${this.stateKeyName}] Set creating error`;}

    get updateAction() { return `[${this.stateKeyName}] Update the entity`;}
    get updateBusyAction() { return `[${this.stateKeyName}] Set updating busy`;}
    get updateErrorAction() { return `[${this.stateKeyName}] Set updating error`;}

    get deleteAction() { return `[${this.stateKeyName}] Delete the entity`;}
    get deleteBusyAction() { return `[${this.stateKeyName}] Set deleting busy`;}
    get deleteErrorAction() { return `[${this.stateKeyName}] Set deleting error`;}

    setCollection(payload: T[]) { return { type: this.setCollection, payload: payload } };
    
    load() { return { type: this.loadAction, payload: null } };
    loadBusy(payload: boolean) { return { type: this.loadBusyAction, payload: payload } };
    loadError(payload: Error) { return { type: this.loadErrorAction, payload: payload } };
    
    create(payload: T) { return { type: this.createAction, payload: payload } };
    createBusy(payload: boolean) { return { type: this.createBusyAction, payload: payload } };
    createError(payload: Error) { return { type: this.createErrorAction, payload: payload } };

    update(payload: T) { return { type: this.updateAction, payload: payload } };
    updateBusy(payload: boolean) { return { type: this.updateBusyAction, payload: payload } };
    updateError(payload: Error) { return { type: this.updateErrorAction, payload: payload } };

    delete(payload: T) { return { type: this.deleteAction, payload: payload } };
    deleteBusy(payload: boolean) { return { type: this.deleteBusyAction, payload: payload } };
    deleteError(payload: Error) { return { type: this.deleteErrorAction, payload: payload } };
}

export interface ApiEntityAdapter<T>{
    reducers: ActionReducerMap<ApiEntityState<T>>;
    actions: CrudApiStateActions<T>;
}

export class ApiEntityAdapterInstance<T> implements ApiEntityAdapter<T>{

    actions: CrudApiStateActions<T>;
    reducers: ActionReducerMap<ApiEntityState<T>, Action>;  
    
    private collectionReducer = (state: T[] = [], action): T[]=>{
        switch(action.type){
            case this.actions.setCollection:
                return action.payload
            default:
                return state;
        }
    }
    
    private apiReducer = (state: CrudApiState = apiInitialState, action: any)=>{
        switch(action.type){
            case this.actions.loadBusyAction:
            case this.actions.createBusyAction:
            case this.actions.updateBusyAction:
            case this.actions.deleteBusyAction:
                return {...state, busy: action.payload };
            case this.actions.loadErrorAction:
            case this.actions.createErrorAction:
            case this.actions.updateErrorAction:
            case this.actions.deleteErrorAction:
                return {...state, error: action.payload };
            default:
                return state;
        }
    }

    constructor(private stateKeyName: string){
        this.actions = new CrudApiStateActions<T>(stateKeyName);

        this.reducers = {
            list: this.collectionReducer,
            loadApiState: this.apiReducer,
            createApiState: this.apiReducer,
            updateApiState: this.apiReducer,
            deleteApiState: this.apiReducer,
        }
    }
}

export function createApiEntityAdapter<T>(StateKeyName: string): ApiEntityAdapter<T> {
    return new ApiEntityAdapterInstance<T>(StateKeyName);
}

export interface CrudStateApiInterface<T> {
    get(): Observable<T[]>;
    create(entity: T): Observable<T[]>;
    update(entity: T): Observable<T[]>;
    delete(entity: T): Observable<T[]>;
}
