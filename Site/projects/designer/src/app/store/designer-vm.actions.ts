import { createAction, props } from "@ngrx/store";
import { DesignerTemplate } from 'src/app/stores/designer-store';

const PREFIX = "[Designer Vm] - ";

export const setSelectedTemplate = createAction(
	`${PREFIX} Set the current designer template`,
	props<{ template: DesignerTemplate }>()
);
