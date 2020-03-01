import { createReducer, on, ActionReducerMap } from '@ngrx/store';
import * as fromDesignerStore from '.';
import * as fromActions from './designer-store.actions';

export const starterSectionsReducer = createReducer(
    fromDesignerStore.starterSectionsInitialState,
    on(fromActions.loadStarterTemplates, (state, action) => {
        return state;
    }),
    on(fromActions.loadStarterSectionsBusy, (state, action) => {
        return { ...state, busy: action.busy }
    }),
    on(fromActions.loadStarterSectionsError, (state, action) => {
        return { ...state, error: action.error }
    }),
    on(fromActions.setStarterSections, (state, action) => {
        return { ...state, entity: action.sections }
    })
)

export const starterTemplatesReducer = createReducer(
    fromDesignerStore.starterTemplatesInitialState,
    // on(null, (state, action) => {
    //     return state;
    // })
)

export const userSectionsReducer = createReducer(
    fromDesignerStore.userSectionsInitialState,
    // on(null, (state, action) => {
    //     return state;
    // })
)

export const templateDefinitionReducer = createReducer(
    fromDesignerStore.templateDefinitionInitialState,
    on(fromActions.loadTemplateDefinition, (state, action) => {
        return state
    }),
    on(fromActions.setTemplateDefinition, (state, action) => {
        return { ...state, entity: action.definition }
    }),
    on(fromActions.loadTemplateDefinitionBusy, (state, action) => {
        return { ...state, busy: action.busy }
    }),
    on(fromActions.loadTemplateDefinitionError, (state, action) => {
        return { ...state, error: action.error }
    }),
)

export const designerReducerMap: ActionReducerMap<fromDesignerStore.DesignerState> = {
    starterTemplates: starterTemplatesReducer,
    starterSections: starterSectionsReducer,
    userSections: userSectionsReducer,
    templateDefinition: templateDefinitionReducer
}

