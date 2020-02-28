import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, concatMap, mergeMap } from "rxjs/operators";
import { EMPTY, of } from "rxjs";
import * as fromFeatureActions from "../store/merge-object-feature.actions";

import * as MergeObjectFeatureActions from "./merge-object-feature.actions";
import { MergeObjectFeatureService } from "./merge-object-feature.service";

@Injectable()
export class MergeObjectFeatureEffects {
  // loadMergeObjectFeatures$ = createEffect(() => {
  //   return this.actions$.pipe(

  //     ofType(MergeObjectFeatureActions.loadMergeObjectFeatures),
  //     concatMap(() =>
  //       /** An EMPTY observable only emits completion. Replace with your own observable API request */
  //       EMPTY.pipe(
  //         map(data => MergeObjectFeatureActions.loadMergeObjectFeaturesSuccess({ data })),
  //         catchError(error => of(MergeObjectFeatureActions.loadMergeObjectFeaturesFailure({ error }))))
  //     )
  //   );
  // });

  gettingNotSelectedMergeFields$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromFeatureActions.gettingNotSelectedMergeFields),
      mergeMap(action =>
        this.featureService
          .getNotSelectedMergeFields(action.selectedFields, action.fieldOptions)
          .pipe(
            mergeMap(list =>
              of(
                fromFeatureActions.setNotSelectedMergeFields({
                  notSelectedFields: list
                })
              )
            )
          )
      )
    )
  );

  getSelectedMergeObjectById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromFeatureActions.updateSelectedItem),
      mergeMap(action =>
        this.featureService
          .getSelectedMergeObjectById(
            action.mergeObjId,
            action.listMergeObjects
          )
          .pipe(
            mergeMap(mergeObject =>
              of(
                fromFeatureActions.selectedMergeObject({
                  payload: mergeObject
                })
              )
            )
          )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private featureService: MergeObjectFeatureService
  ) {}
}
