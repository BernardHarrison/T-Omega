import { Injectable, Inject } from "@angular/core";
import { LOCAL_STORAGE, StorageService } from "ngx-webstorage-service";

import { Observable, of, throwError } from "rxjs";
import { MergeField, MergeFieldApiInterface } from "../stores/merge-field-store";
import { delay, mergeMap } from 'rxjs/operators';
import { CrudStateApiInterface } from '../stores/api-entity';

const MERGE_FIELD_KEY = "MERGE_FIELD_KEY";

@Injectable({
  providedIn: "root"
})
export class MergeFieldApiService implements CrudStateApiInterface<MergeField> {
  get(): Observable<MergeField[]> {
    throw new Error("Method not implemented.");
  }
  create(entity: MergeField): Observable<MergeField[]> {
    throw new Error("Method not implemented.");
  }
  update(entity: MergeField): Observable<MergeField[]> {
    throw new Error("Method not implemented.");
  }
  delete(entity: MergeField): Observable<MergeField[]> {
    throw new Error("Method not implemented.");
  }
  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {
    storage.set(MERGE_FIELD_KEY, [{ name: "blahssss", type: "blahssss" }]);
  }


}
