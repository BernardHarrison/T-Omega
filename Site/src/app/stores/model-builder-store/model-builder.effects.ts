import { Injectable, Inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { MODEL_FIELD_STORE_API, IModelDefinitionApi } from ".";
import * as fromActions from "./model-builder.actions";
import { mergeMap, catchError } from "rxjs/operators";
import { of } from "rxjs";

@Injectable()
export class ModelBuilderEffects {
  constructor(
    private actions$: Actions,
    @Inject(MODEL_FIELD_STORE_API) private api: IModelDefinitionApi
  ) {}

  load$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.loadModelFieldsAction),
      mergeMap(action =>
        this.api.get().pipe(
          mergeMap(list =>
            of(fromActions.setModelBuildersAction({ payload: list }))
          ),
          catchError(error =>
            of(fromActions.modelBuilderApiErrorAction({ payload: error }))
          )
        )
      ),
      mergeMap(action => [
        action,
        fromActions.modelBuilderApiBusyAction({ payload: false })
      ])
    )
  );

  create$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.createModelBuilderAction),
      mergeMap(action =>
        this.api.create(action.payload).pipe(
          mergeMap(list => [
            fromActions.setModelBuildersAction({ payload: list })
          ]),
          catchError(error =>
            of(fromActions.modelBuilderApiErrorAction({ payload: error }))
          )
        )
      ),
      mergeMap(action => [
        action,
        fromActions.modelBuilderApiBusyAction({ payload: false })
      ])
    )
  );

  update$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.updateModelBuilderAction),
      mergeMap(action =>
        this.api.update(action.payload).pipe(
          mergeMap(list => [
            fromActions.setModelBuildersAction({ payload: list })
          ]),
          catchError(error =>
            of(fromActions.modelBuilderApiErrorAction({ payload: error }))
          )
        )
      ),
      mergeMap(action => [
        action,
        fromActions.modelBuilderApiBusyAction({ payload: false })
      ])
    )
  );

  delete$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.deleteModelBuilderAction),
      mergeMap(action =>
        this.api.delete(action.payload).pipe(
          mergeMap(list => [
            fromActions.setModelBuildersAction({ payload: list })
          ]),
          catchError(error =>
            of(fromActions.modelBuilderApiErrorAction({ payload: error }))
          )
        )
      ),
      mergeMap(action => [
        action,
        fromActions.modelBuilderApiBusyAction({ payload: false })
      ])
    )
  );

  addField$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.addMergeToFieldsAction),
      mergeMap(action =>
        this.api.addField(action.field, action.model).pipe(
          mergeMap(list => [
            fromActions.setModelBuildersAction({ payload: list })
          ]),
          catchError(error =>
            of(fromActions.modelBuilderApiErrorAction({ payload: error }))
          )
        )
      ),
      mergeMap(action => [
        action,
        fromActions.modelBuilderApiBusyAction({ payload: false })
      ])
    )
  );

  removeField$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.removeMergeFromFieldsAction),
      mergeMap(action =>
        this.api.removeField(action.field, action.model).pipe(
          mergeMap(list => [
            fromActions.setModelBuildersAction({ payload: list })
          ]),
          catchError(error =>
            of(fromActions.modelBuilderApiErrorAction({ payload: error }))
          )
        )
      ),
      mergeMap(action => [
        action,
        fromActions.modelBuilderApiBusyAction({ payload: false })
      ])
    )
  );
}
