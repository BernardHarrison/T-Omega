import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import { MergeFieldApiService } from "src/app/apis/merge-field-api.service";
import * as fromActions from "src/app/stores/merge-field-store/merge-field.actions";

import { mergeMap, map, catchError } from "rxjs/operators";
import { of } from "rxjs";

@Injectable()
export class MergeFieldEffects {
  loadMergeFields$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.LoadMergeFields),
      mergeMap(action =>
        this.mergeFieldApiService.get().pipe(
          map(mergeFields =>
            fromActions.SetMergeFields({ mergeFields: mergeFields })
          ),
          catchError(error =>
            of(fromActions.LoadingMergeFieldsError({ payload: error }))
          )
        )
      )
    )
  );
  createMergeField$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.CreateMergeField),
      mergeMap(action =>
        this.mergeFieldApiService.create(action.payload).pipe(
          map(mergeFields =>
            fromActions.SetMergeFields({ mergeFields: mergeFields })
          ),
          catchError(error =>
            of(fromActions.CreatingMergeFieldError({ payload: error }))
          )
        )
      )
    )
  );
  updateMergeField$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.UpdateMergeField),
      mergeMap(action =>
        this.mergeFieldApiService
          .update(action.payload.name, action.payload)
          .pipe(
            map(mergeFields =>
              fromActions.SetMergeFields({ mergeFields: mergeFields })
            ),
            catchError(error =>
              of(fromActions.UpdatingMergeFieldError({ payload: error }))
            )
          )
      )
    )
  );
  deleteMergeField$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.DeleteMergeField),
      mergeMap(action =>
        this.mergeFieldApiService.delete(action.payload).pipe(
          map(() => fromActions.DeletingMergeField({ payload: false })),
          catchError(error =>
            of(fromActions.DeletingMergeFieldError({ payload: error }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private mergeFieldApiService: MergeFieldApiService
  ) {}
}
