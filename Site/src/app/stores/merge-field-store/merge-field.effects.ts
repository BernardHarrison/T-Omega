import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Observable, of } from "rxjs";
import { Action } from "@ngrx/store";
import {
  switchMap,
  catchError,
  mergeMap,
  map,
  concatMap
} from "rxjs/operators";
import { MergeFieldApiService } from "src/app/apis/merge-field-api.service";
import * as fromActions from "./merge-field.actions";

@Injectable()
export class MergeFieldEffects {
  constructor(private actions$: Actions, private api: MergeFieldApiService) {}

  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.loadMergeFieldsAction),
      mergeMap(action =>
        this.api.get().pipe(
          map(
            list => fromActions.setMergeFieldsAction({ payload: list }),
            fromActions.mergeFieldApiBusyAction({ payload: false })
          ),
          catchError(error =>
            of(
              fromActions.mergeFieldApiErrorAction({ payload: error }),
              fromActions.mergeFieldApiBusyAction({ payload: false })
            )
          )
        )
      )
    )
  );

  create$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.createMergeFieldAction),
      mergeMap(action =>
        this.api.create(action.payload).pipe(
          map(
            list => fromActions.setMergeFieldsAction({ payload: list }),
            fromActions.mergeFieldApiBusyAction({ payload: false })
          ),
          catchError(error =>
            of(
              fromActions.mergeFieldApiErrorAction({ payload: error }),
              fromActions.mergeFieldApiBusyAction({ payload: false })
            )
          )
        )
      )
    )
  );

  update$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.updateMergeFieldAction),
      mergeMap(action =>
        this.api.update(action.payload).pipe(
          map(
            list => fromActions.setMergeFieldsAction({ payload: list }),
            fromActions.mergeFieldApiBusyAction({ payload: false })
          ),
          catchError(error =>
            of(
              fromActions.mergeFieldApiErrorAction({ payload: error }),
              fromActions.mergeFieldApiBusyAction({ payload: false })
            )
          )
        )
      )
    )
  );

  delete$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.deleteMergeFieldAction),
      mergeMap(action =>
        this.api.delete(action.payload).pipe(
          map(
            list => fromActions.setMergeFieldsAction({ payload: list }),
            fromActions.mergeFieldApiBusyAction({ payload: false })
          ),
          catchError(error =>
            of(
              fromActions.mergeFieldApiErrorAction({ payload: error }),
              fromActions.mergeFieldApiBusyAction({ payload: false })
            )
          )
        )
      )
    )
  );
}
