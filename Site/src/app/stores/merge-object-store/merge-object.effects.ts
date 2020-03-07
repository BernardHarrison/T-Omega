import { Injectable, Inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import * as fromActions from "./merge-object.actions";
import { mergeMap, catchError } from "rxjs/operators";
import { of } from "rxjs";
import { IMergeObjectApi, MERGE_OBJECT_STORE_API } from ".";


@Injectable()
export class MergeObjectEffects {
  constructor(
    private actions$: Actions,
    @Inject(MERGE_OBJECT_STORE_API) private api: IMergeObjectApi
  ) { }

  allApiActions$ = createEffect(() => this.actions$.pipe(
    ofType(
      fromActions.loadMergeObjectsAction,
      fromActions.createMergeObjectAction,
      fromActions.updateMergeObjectAction,
      fromActions.deleteMergeObjectAction,
      fromActions.addMergeToFieldsAction,
      fromActions.addObjectToObjectsAction,
      fromActions.removeMergeFromFieldsAction,
      fromActions.removeMergeObjectAction
    ),
    mergeMap(action => [
      fromActions.mergeObjectApiErrorAction({ payload: null }),
      fromActions.mergeObjectApiBusyAction({ payload: true })
    ])
  ));

  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.loadMergeObjectsAction),
      mergeMap(action =>
        this.api.get().pipe(
          mergeMap(list =>
            of(fromActions.setMergeObjectsAction({ payload: list }))
          ),
          catchError(error =>
            of(fromActions.mergeObjectApiErrorAction({ payload: error }))
          )
        )
      ),
      mergeMap(action => [
        action,
        fromActions.mergeObjectApiBusyAction({ payload: false })
      ])
    )
  );

  create$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.createMergeObjectAction),
      mergeMap(action =>
        this.api.create(action.payload).pipe(
          mergeMap(list => [
            fromActions.setMergeObjectsAction({ payload: list })
          ]),
          catchError(error =>
            of(fromActions.mergeObjectApiErrorAction({ payload: error }))
          )
        )
      ),
      mergeMap(action => [
        action,
        fromActions.mergeObjectApiBusyAction({ payload: false })
      ])
    )
  );

  update$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.updateMergeObjectAction),
      mergeMap(action =>
        this.api.update(action.payload).pipe(
          mergeMap(list => [
            fromActions.setMergeObjectsAction({ payload: list })
          ]),
          catchError(error =>
            of(fromActions.mergeObjectApiBusyAction({ payload: error }))
          )
        )
      ),
      mergeMap(action => [
        action,
        fromActions.mergeObjectApiBusyAction({ payload: false })
      ])
    )
  );

  delete$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.deleteMergeObjectAction),
      mergeMap(action =>
        this.api.delete(action.payload).pipe(
          mergeMap(list => [
            fromActions.setMergeObjectsAction({ payload: list })
          ]),
          catchError(error =>
            of(fromActions.mergeObjectApiErrorAction({ payload: error }))
          )
        )
      ),
      mergeMap(action => [
        action,
        fromActions.mergeObjectApiBusyAction({ payload: false })
      ])
    )
  );

  addField$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.addMergeToFieldsAction),
      mergeMap(action =>
        this.api.addField(action.field, action.model).pipe(
          mergeMap(item => [
            fromActions.setMergeObjectAction({ payload: item })
          ]),
          catchError(error =>
            of(fromActions.mergeObjectApiErrorAction({ payload: error }))
          )
        )
      ),
      mergeMap(action => [
        action,
        fromActions.mergeObjectApiBusyAction({ payload: false })
      ])
    )
  );

  addObject$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.addObjectToObjectsAction),
      mergeMap(action =>
        this.api.addObject(action.fieldName, action.model).pipe(
          mergeMap(item => [
            fromActions.setMergeObjectAction({ payload: item })
          ]),
          catchError(error =>
            of(fromActions.mergeObjectApiErrorAction({ payload: error }))
          )
        )
      ),
      mergeMap(action => [
        action,
        fromActions.mergeObjectApiBusyAction({ payload: false })
      ])
    )
  );

  removeField$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.removeMergeFromFieldsAction),
      mergeMap(action =>
        this.api.removeField(action.field, action.model).pipe(
          mergeMap(item => [
            fromActions.setMergeObjectAction({ payload: item })
          ]),
          catchError(error =>
            of(fromActions.mergeObjectApiErrorAction({ payload: error }))
          )
        )
      ),
      mergeMap(action => [
        action,
        fromActions.mergeObjectApiBusyAction({ payload: false })
      ])
    )
  );

  removeObject$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.removeMergeObjectAction),
      mergeMap(action =>
        this.api.removeObject(action.payload).pipe(
          mergeMap(item => [
            fromActions.setMergeObjectAction({ payload: item })
          ]),
          catchError(error =>
            of(fromActions.mergeObjectApiErrorAction({ payload: error }))
          )
        )
      ),
      mergeMap(action => [
        action,
        fromActions.mergeObjectApiBusyAction({ payload: false })
      ])
    )
  );
}
