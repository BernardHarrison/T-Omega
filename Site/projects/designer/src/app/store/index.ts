import { DesignerTemplate, DesignerAppState } from 'src/app/stores/designer-store';

export const DESIGNER_VM_STORE = "designerVm"

export class DesignerVmState {
	selectedTemplate: DesignerTemplate;
}

export class DesignerVmAppState extends DesignerAppState {
	designerVm: DesignerVmState
}

