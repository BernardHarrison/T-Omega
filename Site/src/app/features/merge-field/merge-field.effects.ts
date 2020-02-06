import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { Action, Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError, tap, switchMap } from 'rxjs/operators';
import {
  MergeFieldAction,
  MergeFieldActionTypes,
  SetMergeFields,
  LoadingMergeFieldsError,
  LoadingMergeFields
} from './merge-field.actions'
import { MergeFieldApi, MergeFieldAppState } from '.';


@Injectable()
export class MergeFieldEffects {

  constructor(
    private actions$: Actions,
    private api: MergeFieldApi,
    private store: Store<MergeFieldAppState>
  ) { }


  @Effect() loadMergeFields$: Observable<Action> =
    this.actions$.pipe(
      ofType<MergeFieldAction>(MergeFieldActionTypes.LOAD_MERGEFIELD),
      tap(action => this.store.dispatch(new LoadingMergeFields(true))),
      switchMap(action => this.api.get()),
      switchMap(result => from([
        new SetMergeFields(result),
        new LoadingMergeFields(false)
      ]))
    );

}
