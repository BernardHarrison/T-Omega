import { createReducer, on, ActionReducerMap } from "@ngrx/store";
import * as fromActions from './designer-vm.actions';
import { DesignerVmState } from '.';

export const setSelectedTemplateRecucer = createReducer(null,
	on(fromActions.setSelectedTemplate, (state, action) => {
		return action.template
	}),
)

export const designerVmReducerMap: ActionReducerMap<DesignerVmState> = {
	selectedTemplate: setSelectedTemplateRecucer,
}