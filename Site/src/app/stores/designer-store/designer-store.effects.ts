import { Injectable, Inject } from "@angular/core";
import { DESIGNER_STORE_API, DesignerStoreApi } from '.';

@Injectable()
export class DesingerStoreEffects {
    constructor(@Inject(DESIGNER_STORE_API) private api: DesignerStoreApi) {

    }
}