import { Injectable, Inject } from "@angular/core";
import { DESIGNER_STORE_API, DesignerStoreApiInterface, DesignerAppState } from '.';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { loadStarterSections, setStarterSections, loadStarterSectionsError, loadStarterSectionsBusy, loadTemplateDefinition, setTemplateDefinition, loadTemplateDefinitionBusy, loadTemplateDefinitionError } from './designer-store.actions';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { Action, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';

@Injectable()
export class DesingerStoreEffects {
    constructor(
        @Inject(DESIGNER_STORE_API) private api: DesignerStoreApiInterface,
        private actions$: Actions,
        private store: Store<DesignerAppState>
    ) {
    }

    @Effect() loadStarterSectionsEffect$: Observable<Action> = this.actions$.pipe(
        ofType(loadStarterSections),
        tap(actions => this.store.dispatch(loadStarterSectionsBusy({ busy: true }))),
        tap(actions => this.store.dispatch(loadStarterSectionsError({ error: null }))),
        mergeMap(action =>
            this.api.getStarterSections().pipe(
                mergeMap(result => of(setStarterSections({ sections: result }))),
                catchError(err => of(loadStarterSectionsError({ error: err })))
            )),
        mergeMap(action => [
            action,
            loadStarterSectionsBusy({ busy: false })
        ])
    );

    @Effect() loadTemplateDefinitionEffect$: Observable<Action> = this.actions$.pipe(
        ofType(loadTemplateDefinition),
        tap(actions => this.store.dispatch(loadTemplateDefinitionBusy({ busy: true }))),
        tap(actions => this.store.dispatch(loadTemplateDefinitionError({ error: null }))),
        mergeMap(action =>
            this.api.getTemplateDefinition().pipe(
                mergeMap(result => of(setTemplateDefinition({ definition: result }))),
                catchError(err => of(loadTemplateDefinitionError({ error: err })))
            )),
        mergeMap(action => [
            action,
            loadTemplateDefinitionBusy({ busy: false })
        ])
    );

}