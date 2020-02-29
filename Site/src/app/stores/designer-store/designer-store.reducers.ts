import { createReducer, on, ActionReducerMap } from '@ngrx/store';
import * as fromtDesignerStore from '.';
import * as fromActions from './designer-store.actions';

export const starterSectionsReducer = createReducer(
    fromtDesignerStore.starterSectionsInitialState,
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
    fromtDesignerStore.starterTemplatesInitialState,
    // on(null, (state, action) => {
    //     return state;
    // })
)

export const userSectionsReducer = createReducer(
    fromtDesignerStore.userSectionsInitialState,
    // on(null, (state, action) => {
    //     return state;
    // })
)

export const templateDefinitionReducer = createReducer(
    fromtDesignerStore.templateDefinitionInitialState,
    // on(null, (state, action) => {
    //     return state
    // })
)

export const selectedTemplateReducer = createReducer(
    fromtDesignerStore.selectedTemplateInitialState,
    // on(null, (state, action) => {
    //     return state;
    // })
)


export const designerReducerMap: ActionReducerMap<fromtDesignerStore.DesignerState> = {
    starterTemplates: starterTemplatesReducer,
    starterSections: starterSectionsReducer,
    userSections: userSectionsReducer,
    templateDefinition: templateDefinitionReducer,
    selectedTemplate: selectedTemplateReducer
}

