import { Injectable, Inject } from "@angular/core";
import { LOCAL_STORAGE, StorageService } from "ngx-webstorage-service";

import { DesignerStoreApiInterface, DesignerTemplate, DesignerSection, WidthBehavior, TemplateDefinition } from '../stores/designer-store';
import { sampleSectionList } from './sample-data';
import { Observable, of } from 'rxjs';

const DESIGNER_STORE_KEY = "DESIGNER_STORE_KEY";
const RESET_DESIGNER_API_STORE = true;

type storeEntity = {
	definition: TemplateDefinition
}

@Injectable({
	providedIn: "root"
})
export class DesignerStoreApi implements DesignerStoreApiInterface {

	constructor(
		@Inject(LOCAL_STORAGE) private storage: StorageService
	) {
		let entity = RESET_DESIGNER_API_STORE
			? null
			: <storeEntity>this.storage.get(DESIGNER_STORE_KEY);

		entity = entity || {
			definition: {
				id: 99,
				name: "My First Template",
				conditionStates: [],
				default: {
					title: "My First Email",
					backgroundColor: "#ffffff",
					sections: []
				}
			}
		};
		this.storage.set(DESIGNER_STORE_KEY, entity)
	}

	private get(): storeEntity {
		let entity = <storeEntity>this.storage.get(DESIGNER_STORE_KEY);
		return entity;
	}

	getStarterTemplates(): Observable<DesignerTemplate[]> {
		throw new Error("Method not implemented.");
	}

	getStarterSections(): Observable<DesignerSection[]> {
		return of(sampleSectionList);
	}

	getTemplateDefinition(): Observable<TemplateDefinition> {
		return of(this.get().definition);
	}
}
