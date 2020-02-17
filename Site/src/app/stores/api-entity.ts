import { ActionReducerMap, Action } from "@ngrx/store";
import { Observable } from "rxjs";
import { Actions, ofType } from "@ngrx/effects";
import { switchMap, catchError, map } from "rxjs/operators";

const apiInitialState: CrudApiState = { busy: false, error: undefined };

export interface CrudApiState {
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

export class CrudApiStateActions<T> {
  constructor(private stateKeyName: string) {}

  get setCollectionAction() {
    return `[${this.stateKeyName}] Set the array`;
  }

  get loadAction() {
    return `[${this.stateKeyName}] Load the array`;
  }
  get loadBusyAction() {
    return `[${this.stateKeyName}] Set loading busy`;
  }
  get loadErrorAction() {
    return `[${this.stateKeyName}] Set loading error`;
  }

  get createAction() {
    return `[${this.stateKeyName}] Create entity`;
  }
  get createBusyAction() {
    return `[${this.stateKeyName}] Set creating busy`;
  }
  get createErrorAction() {
    return `[${this.stateKeyName}] Set creating error`;
  }

  get updateAction() {
    return `[${this.stateKeyName}] Update the entity`;
  }
  get updateBusyAction() {
    return `[${this.stateKeyName}] Set updating busy`;
  }
  get updateErrorAction() {
    return `[${this.stateKeyName}] Set updating error`;
  }

  get deleteAction() {
    return `[${this.stateKeyName}] Delete the entity`;
  }
  get deleteBusyAction() {
    return `[${this.stateKeyName}] Set deleting busy`;
  }
  get deleteErrorAction() {
    return `[${this.stateKeyName}] Set deleting error`;
  }

  setCollection(payload: T[]) {
    return { type: this.setCollectionAction, payload: payload };
  }

  load() {
    return { type: this.loadAction, payload: null };
  }
  loadBusy(payload: boolean) {
    return { type: this.loadBusyAction, payload: payload };
  }
  loadError(payload: Error) {
    return { type: this.loadErrorAction, payload: payload };
  }

  create(payload: T) {
    return { type: this.createAction, payload: payload };
  }
  createBusy(payload: boolean) {
    return { type: this.createBusyAction, payload: payload };
  }
  createError(payload: Error) {
    return { type: this.createErrorAction, payload: payload };
  }

  update(payload: T) {
    return { type: this.updateAction, payload: payload };
  }
  updateBusy(payload: boolean) {
    return { type: this.updateBusyAction, payload: payload };
  }
  updateError(payload: Error) {
    return { type: this.updateErrorAction, payload: payload };
  }

  delete(payload: T) {
    return { type: this.deleteAction, payload: payload };
  }
  deleteBusy(payload: boolean) {
    return { type: this.deleteBusyAction, payload: payload };
  }
  deleteError(payload: Error) {
    return { type: this.deleteErrorAction, payload: payload };
  }
}

export interface ApiEntityAdapter<T> {
  reducers: ActionReducerMap<ApiEntityState<T>>;
  actions: CrudApiStateActions<T>;
}

export class ApiEntityAdapterInstance<T> implements ApiEntityAdapter<T> {
  actions: CrudApiStateActions<T>;
  reducers: ActionReducerMap<ApiEntityState<T>, Action>;

  private collectionReducer = (state: T[] = [], action): T[] => {
    switch (action.type) {
            case this.actions.setCollectionAction:
                return [...action.payload]
        return action.payload;
      default:
        return state;
    }
  };

  private loadApiReducer = (
    state: CrudApiState = apiInitialState,
    action: any
  ) => {
    switch (action.type) {
      case this.actions.loadBusyAction:
        return { ...state, busy: action.payload };
      case this.actions.loadErrorAction:
        return { ...state, error: action.payload };
      case this.actions.loadAction:
        return { ...state, busy: true, error: null };
      default:
        return state;
    }
  };

  private createApiReducer = (
    state: CrudApiState = apiInitialState,
    action: any
  ) => {
    switch (action.type) {
      case this.actions.createBusyAction:
        return { ...state, busy: action.payload };
      case this.actions.createErrorAction:
        return { ...state, error: action.payload };
      case this.actions.createAction:
        return { ...state, busy: true, error: null };
      default:
        return state;
    }
  };

  private updateApiReducer = (
    state: CrudApiState = apiInitialState,
    action: any
  ) => {
    switch (action.type) {
      case this.actions.updateBusyAction:
        return { ...state, busy: action.payload };
      case this.actions.updateErrorAction:
        return { ...state, error: action.payload };
      case this.actions.updateAction:
        return { ...state, busy: true, error: null };
      default:
        return state;
    }
  };

  private deleteApiReducer = (
    state: CrudApiState = apiInitialState,
    action: any
  ) => {
    switch (action.type) {
      case this.actions.deleteBusyAction:
        return { ...state, busy: action.payload };
      case this.actions.deleteErrorAction:
        return { ...state, error: action.payload };
      case this.actions.deleteAction:
        return { ...state, busy: true, error: null };
      default:
        return state;
    }
  };

  constructor(private stateKeyName: string) {
    this.actions = new CrudApiStateActions<T>(stateKeyName);

    this.reducers = {
      list: this.collectionReducer,
      loadApiState: this.loadApiReducer,
      createApiState: this.createApiReducer,
      updateApiState: this.updateApiReducer,
      deleteApiState: this.deleteApiReducer
    };
  }
}

export function createApiEntityAdapter<T>(
  StateKeyName: string
): ApiEntityAdapter<T> {
  return new ApiEntityAdapterInstance<T>(StateKeyName);
}

export interface CrudStateApiInterface<T> {
  get(): Observable<T[]>;
  create(entity: T): Observable<T[]>;
  update(entity: T): Observable<T[]>;
  delete(entity: T): Observable<T[]>;
}

export class CrudStateApiEffects<T> {
  constructor(
    private api: CrudStateApiInterface<T>,
    private actions$: Actions,
    private actions: CrudApiStateActions<T>
  ) {}

  load$: Observable<Action> = this.actions$.pipe(
    ofType(this.actions.loadAction),
    switchMap(action => this.api.get()),
    switchMap(result => [
      this.actions.loadBusy(false),
      this.actions.setCollection(result)
    ]),
    catchError(err => [
      this.actions.loadBusy(false),
      this.actions.loadError(err)
    ])
  );

  create$: Observable<Action> = this.actions$.pipe(
    ofType<{ type: string; payload: T }>(this.actions.createAction),
    switchMap(action => this.api.create(action.payload)),
    switchMap(result => [
      this.actions.createBusy(false),
      this.actions.setCollection(result)
    ]),
    catchError(err => [
      this.actions.createBusy(false),
      this.actions.createError(err)
    ])
  );

  update$: Observable<Action> = this.actions$.pipe(
    ofType<{ type: string; payload: T }>(this.actions.updateAction),
    switchMap(action => this.api.update(action.payload)),
    switchMap(result => [
      this.actions.updateBusy(false),
      this.actions.setCollection(result)
    ]),
    catchError(err => [
      this.actions.updateBusy(false),
      this.actions.updateError(err)
    ])
  );

  delete$: Observable<Action> = this.actions$.pipe(
    ofType<{ type: string; payload: T }>(this.actions.deleteAction),
    switchMap(action => this.api.delete(action.payload)),
    switchMap(result => [
      this.actions.deleteBusy(false),
      this.actions.setCollection(result)
    ]),
    catchError(err => [
      this.actions.deleteBusy(false),
      this.actions.deleteError(err)
    ])
  );
}
