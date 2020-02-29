import { createAction, props } from '@ngrx/store';

const PREFIX = "[Designer Store] - "

export const loadStarterTemplates = createAction(
    `${PREFIX} Load starter templates`
);

export const loadStarterSections = createAction(
    `${PREFIX} Load starter sections`
)