import { createAction, props } from '@ngrx/store';
import { DesignerSection, TemplateDefinition } from '.';

const PREFIX = "[Designer Store] - "

//Designer starter sections
export const loadStarterSections = createAction(
    `${PREFIX} Load starter sections`
);

export const loadStarterSectionsBusy = createAction(
    `${PREFIX} Set loading starter sections busy`,
    props<{ busy: boolean }>()
);

export const loadStarterSectionsError = createAction(
    `${PREFIX} Set loading starter sections error`,
    props<{ error: Error }>()
)

export const setStarterSections = createAction(
    `${PREFIX} Set collection of starter sections`,
    props<{ sections: DesignerSection[] }>()
);


//Designer starter templates
export const loadStarterTemplates = createAction(
    `${PREFIX} Load starter templates`
);

//Designer template definition
export const loadTemplateDefinition = createAction(
    `${PREFIX} Load the designer template definition`
);

export const setTemplateDefinition = createAction(
    `${PREFIX} Set template definition`,
    props<{ definition: TemplateDefinition }>()
);

export const loadTemplateDefinitionBusy = createAction(
    `${PREFIX} Set busy for loading template definition`,
    props<{ busy: boolean }>()
);

export const loadTemplateDefinitionError = createAction(
    `${PREFIX} Set error for loading template definition`,
    props<{ error: Error }>()
)
