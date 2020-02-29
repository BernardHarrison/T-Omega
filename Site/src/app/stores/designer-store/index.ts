import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

export const desingerStoreKey = "designerStore";

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

export interface SizeDefinition {
	top: number;
	bottom: number;
	left: number;
	right: number;
}

export interface SectionDefinition {
	behavior: WidthBehavior;
	pixelWidth: number;
	percentageWidth: number;
	color: string; //Background color
}

export interface DesignerSection {
	outer: SectionDefinition;
	inner: SectionDefinition;
	padding: SizeDefinition;
	margin: SizeDefinition;
}

export enum WidthBehavior {
	auto,
	fixed
}

export interface ApiEntityState<T> {
	entity: T;
	busy: boolean;
	error: Error
}

export interface DesignerState {
	starterTemplates: ApiEntityState<DesignerTemplate[]>;
	starterSections: ApiEntityState<DesignerSection[]>;
	userSections: ApiEntityState<DesignerSection[]>;
	templateDefinition: ApiEntityState<TemplateDefinition>;
	selectedTemplate: ApiEntityState<DesignerTemplate>;
}

export class DesignerAppState {
	designerStore: DesignerState;
}

export const starterTemplatesInitialState: ApiEntityState<DesignerTemplate[]> = {
	entity: [],
	busy: false,
	error: null
};

export const starterSectionsInitialState: ApiEntityState<DesignerSection[]> = {
	entity: [],
	busy: false,
	error: null
};

export const userSectionsInitialState: ApiEntityState<DesignerSection[]> = {
	entity: [],
	busy: false,
	error: null
};

export const templateDefinitionInitialState: ApiEntityState<TemplateDefinition> = {
	entity: null,
	busy: false,
	error: null
};

export const selectedTemplateInitialState: ApiEntityState<DesignerTemplate> = {
	entity: null,
	busy: false,
	error: null
};

export interface DesignerStoreApiInterface {
	getStarterTemplates(): Observable<DesignerTemplate[]>;
	getStarterSections(): Observable<DesignerSection[]>;
}

export const DESIGNER_STORE_API = new InjectionToken<DesignerStoreApiInterface>(
	"DESIGNER_STORE_API"
);