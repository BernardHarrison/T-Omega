import { ConditionDefinition } from '../condition-builder-store';

export interface TemplateDefinition {
	id: number;
	name: string;
	default: DesignerTemplate;
	conditionStates: ConditionTemplateMap[];
}

export interface ConditionTemplateMap {

	tempate: DesignerTemplate;
}

export interface DesignerTemplate {
	title: string;
	backgroundColor: string;
	sections: DesignerSection[];
}

export interface DesignerSection {
	widthBehavior: WidthBehavior;
	width: WidthDefinition;
	innerBackgroundColor: string;
	outerBackgroundColor: string;
}

export enum WidthBehavior {
	auto,
	fixed
}

export interface WidthDefinition {
	pixel: number;
	percentage: number;
}

export interface DesignerState {
	starterTemplates: DesignerTemplate[];
	starterSections: DesignerSection[];
	templateDefinitionId: number;

}
