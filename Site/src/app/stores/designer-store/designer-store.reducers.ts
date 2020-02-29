import { createReducer, on, ActionReducerMap } from '@ngrx/store';
import * as fromtDesignerStore from '.';

export const starterTemplatesReducer = createReducer(
    fromtDesignerStore.starterTemplatesInitialState,
    on(null, (state, action) => {
        return state;
    })
)

export const starterSectionsReducer = createReducer(
    fromtDesignerStore.starterSectionsInitialState,
    on(null, (state, action) => {
        return state;
    })
)

export const userSectionsReducer = createReducer(
    fromtDesignerStore.userSectionsInitialState,
    on(null, (state, action) => {
        return state;
    })
)

export const templateDefinitionReducer = createReducer(
    fromtDesignerStore.templateDefinitionInitialState,
    on(null, (state, action) => {
        return state
    })
)

export const selectedTemplateReducer = createReducer(
    fromtDesignerStore.selectedTemplateInitialState,
    on(null, (state, action) => {
        return state;
    })
)


export const designerReducerMap: ActionReducerMap<fromtDesignerStore.DesignerState> = {
    starterTemplates: starterTemplatesReducer,
    starterSections: starterSectionsReducer,
    userSections: userSectionsReducer,
    templateDefinition: templateDefinitionReducer,
    selectedTemplate: selectedTemplateReducer
}

