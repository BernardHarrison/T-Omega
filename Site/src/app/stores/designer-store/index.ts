import { InjectionToken } from '@angular/core';

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

export interface ApiCollectionState<T> {
	list: T[];
	busy: boolean;
	error: Error;
}

export interface ApiEntityState<T> {
	item: T;
	busy: boolean;
	error: Error
}


export interface DesignerState {
	starterTemplates: ApiCollectionState<DesignerTemplate>;
	starterSections: ApiCollectionState<DesignerSection>;
	userSections: ApiCollectionState<DesignerSection>;
	templateDefinition: ApiEntityState<TemplateDefinition>;
	selectedTemplate: ApiEntityState<DesignerTemplate>;
}


export class DesignerAppState {
	designerStore: DesignerState;
}

export const starterTemplatesInitialState: ApiCollectionState<DesignerTemplate> = {
	list: [],
	busy: false,
	error: null
};

export const starterSectionsInitialState: ApiCollectionState<DesignerSection> = {
	list: [],
	busy: false,
	error: null
};

export const userSectionsInitialState: ApiCollectionState<DesignerSection> = {
	list: [],
	busy: false,
	error: null
};

export const templateDefinitionInitialState: ApiEntityState<TemplateDefinition> = {
	item: null,
	busy: false,
	error: null
};

export const selectedTemplateInitialState: ApiEntityState<DesignerTemplate> = {
	item: null,
	busy: false,
	error: null
};

export interface DesignerStoreApi {
	getStarterTemplates(): DesignerTemplate[];
	getStarterSections(): DesignerSection[];
}

export const DESIGNER_STORE_API = new InjectionToken<DesignerStoreApi>(
	"DESIGNER_STORE_API"
);