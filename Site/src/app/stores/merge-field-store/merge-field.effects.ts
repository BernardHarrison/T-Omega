import { Injectable, Inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Observable, of } from "rxjs";
import { Action } from "@ngrx/store";
import {
  switchMap,
  catchError,
  mergeMap,
  map,
  concatMap,
  tap
} from "rxjs/operators";
import { MergeFieldApiService } from "src/app/apis/merge-field-api.service";
import * as fromActions from "./merge-field.actions";
import { AlertService } from "ngx-alerts";
import { MERGE_FIELD_STORE_API, IMergeFieldApi } from ".";

@Injectable()
export class MergeFieldEffects {
  constructor(
    private actions$: Actions,
    @Inject(MERGE_FIELD_STORE_API) private api: IMergeFieldApi,
    private alertService: AlertService
  ) {}

  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.loadMergeFieldsAction),
      mergeMap(action =>
        this.api.get().pipe(
          mergeMap(list => [
            fromActions.setMergeFieldsAction({ payload: list }),
            fromActions.mergeFieldApiBusyAction({ payload: false })
          ]),
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
      tap(() => this.alertService.info("Working on creating Merge Field")),
      mergeMap(action =>
        this.api.create(action.payload).pipe(
          mergeMap(list => [
            fromActions.setMergeFieldsAction({ payload: list }),
            fromActions.mergeFieldApiBusyAction({ payload: false })
          ]),
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
      tap(() => this.alertService.info("Working on updating Merge Field")),
      mergeMap(action =>
        this.api.update(action.payload).pipe(
          mergeMap(list => [
            fromActions.setMergeFieldsAction({ payload: list }),
            fromActions.mergeFieldApiBusyAction({ payload: false })
          ]),
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
      tap(() => this.alertService.info("Working on deleting Merge Field")),
      mergeMap(action =>
        this.api.delete(action.payload).pipe(
          mergeMap(list => [
            fromActions.setMergeFieldsAction({ payload: list }),
            fromActions.mergeFieldApiBusyAction({ payload: false })
          ]),
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
