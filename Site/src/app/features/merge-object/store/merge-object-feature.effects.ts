import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as MergeObjectFeatureActions from './merge-object-feature.actions';



@Injectable()
export class MergeObjectFeatureEffects {

  loadMergeObjectFeatures$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(MergeObjectFeatureActions.loadMergeObjectFeatures),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => MergeObjectFeatureActions.loadMergeObjectFeaturesSuccess({ data })),
          catchError(error => of(MergeObjectFeatureActions.loadMergeObjectFeaturesFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
