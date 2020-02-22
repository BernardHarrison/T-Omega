import { ConditionDefinition } from '../condition-builder-store';

export interface TemplateDefinition {
	id: number;
	name: string;
	defaultCondition: DesignerTemplate;
	conditionStates: ConditionTemplateMap[];
}

export interface ConditionTemplateMap {
	condition: ConditionDefinition;
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
