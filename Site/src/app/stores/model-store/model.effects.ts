import { Injectable, Inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import { mergeMap, catchError, tap } from "rxjs/operators";
import { of } from "rxjs";
import { IModelObjectApi, MODEL_STORE_API } from ".";
import * as fromActions from "./model.actions";

@Injectable()
export class ModelEffects {
  constructor(
    private actions$: Actions,
    @Inject(MODEL_STORE_API) private api: IModelObjectApi
  ) {}

  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.loadModelsAction),
      mergeMap(action =>
        this.api.get().pipe(
          mergeMap(list => of(fromActions.setModelsAction({ payload: list }))),
          catchError(error =>
            of(fromActions.modelApiErrorAction({ payload: error }))
          )
        )
      ),
      mergeMap(action => [
        action,
        fromActions.modelApiBusyAction({ payload: false })
      ])
    )
  );

  create$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.createModelAction),
      mergeMap(action =>
        this.api.create(action.payload).pipe(
          mergeMap(list => [fromActions.setModelsAction({ payload: list })]),
          catchError(error =>
            of(fromActions.modelApiErrorAction({ payload: error }))
          )
        )
      ),
      mergeMap(action => [
        action,
        fromActions.modelApiBusyAction({ payload: false })
      ])
    )
  );

  update$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.updateModelAction),
      mergeMap(action =>
        this.api.update(action.payload).pipe(
          mergeMap(list => [fromActions.setModelsAction({ payload: list })]),
          catchError(error =>
            of(fromActions.modelApiErrorAction({ payload: error }))
          )
        )
      ),
      mergeMap(action => [
        action,
        fromActions.modelApiBusyAction({ payload: false })
      ])
    )
  );

  delete$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.deleteModelAction),
      mergeMap(action =>
        this.api.delete(action.payload).pipe(
          mergeMap(list => [fromActions.setModelsAction({ payload: list })]),
          catchError(error =>
            of(fromActions.modelApiErrorAction({ payload: error }))
          )
        )
      ),
      mergeMap(action => [
        action,
        fromActions.modelApiBusyAction({ payload: false })
      ])
    )
  );
}
