import { createAction, props } from '@ngrx/store';
import { DesignerSection } from '.';

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

