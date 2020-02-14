import { Injectable, Inject } from "@angular/core";
import { MAILING_ACTIVITY_API, MergeFieldApiInterface, MergeFieldAppState } from '.';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store, Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { loadMergeFieldsAction, mergeFieldLoadBusyAction, mergeFieldLoadErrorAction, setMergeFieldsAction } from './merge-field.actions';
import { tap, switchMap, catchError, delay, take } from 'rxjs/operators';

@Injectable()
export class MergeFieldEffects {
    constructor(
        @Inject(MAILING_ACTIVITY_API) private api: MergeFieldApiInterface,
        private action$: Actions,
        private store: Store<MergeFieldAppState>
    ) {

    }

    @Effect() loadMergeFields$: Observable<Action> =
        this.action$.pipe(
            ofType(loadMergeFieldsAction),
            tap(action => this.store.dispatch(mergeFieldLoadBusyAction({ payload: true }))),
            tap(actions => this.store.dispatch(mergeFieldLoadErrorAction({ payload: null }))),
            switchMap(action => this.api.get().pipe(
                catchError(err => {
                    this.store.dispatch(mergeFieldLoadBusyAction({ payload: false }));
                    this.store.dispatch(mergeFieldLoadErrorAction({ payload: err }))
                    return of(null);
                })
            )),
            switchMap(result => [
                setMergeFieldsAction({ payload: result }),
                mergeFieldLoadBusyAction({ payload: false })
            ])
        );

}