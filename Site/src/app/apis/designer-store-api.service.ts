import { Injectable, Inject } from "@angular/core";
import { LOCAL_STORAGE, StorageService } from "ngx-webstorage-service";

import { DesignerStoreApiInterface, DesignerTemplate, DesignerSection, WidthBehavior } from '../stores/designer-store';
import { sampleSectionList } from './sample-data';
import { Observable, of } from 'rxjs';

const DESIGNER_STORE_KEY = "DESIGNER_STORE_KEY";

@Injectable({
	providedIn: "root"
})
export class DesignerStoreApi implements DesignerStoreApiInterface {

	constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {
		let items = <DesignerSection[]>this.storage.get(DESIGNER_STORE_KEY);
		this.storage.set(DESIGNER_STORE_KEY, []);
	}

	getStarterTemplates(): Observable<DesignerTemplate[]> {
		throw new Error("Method not implemented.");
	}

	getStarterSections(): Observable<DesignerSection[]> {
		return of(sampleSectionList);
	}

}
