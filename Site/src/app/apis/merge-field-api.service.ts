import { Injectable, Inject } from "@angular/core";
import { LOCAL_STORAGE, StorageService } from "ngx-webstorage-service";

import { of, Observable, throwError } from "rxjs";
import { delay, mergeMap } from "rxjs/operators";
import { IMergeFieldApi, MergeField } from "../stores/merge-field-store";

const MERGE_FIELD_KEY = "MERGE_FIELD_KEY";

@Injectable({
  providedIn: "root"
})
export class MergeFieldApiService implements IMergeFieldApi {
  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {
    storage.set(MERGE_FIELD_KEY, [
      { id: 1, name: "state", type: String },
      { id: 2, name: "street", type: String },
      { id: 3, name: "zipCode", type: Number }
    ]);
  }

  get(): Observable<MergeField[]> {
    let items = <MergeField[]>this.storage.get(MERGE_FIELD_KEY);
    if (!items) {
      this.storage.set(MERGE_FIELD_KEY, []);
      return this.get();
    }
    return of(items).pipe(
      delay(1000)
      //mergeMap(x => throwError(new Error("Api Error")))
    );
  }
  create(entity: MergeField): Observable<MergeField[]> {
    let items = <MergeField[]>this.storage.get(MERGE_FIELD_KEY);
    entity.id = Math.floor(Math.random() * 10000);
    items.push(entity);
    this.storage.set(MERGE_FIELD_KEY, items);
    return this.get();
  }
  update(entity: MergeField): Observable<MergeField[]> {
    let items = <MergeField[]>this.storage.get(MERGE_FIELD_KEY);
    items.forEach((item, index) => {
      if (item.id == entity.id) items.splice(index, 1);
    });
    items.push(entity);
    this.storage.set(MERGE_FIELD_KEY, items);
    return this.get();
  }
  delete(entity: MergeField): Observable<MergeField[]> {
    let items = <MergeField[]>this.storage.get(MERGE_FIELD_KEY);
    items.forEach((item, index) => {
      if (item.id == entity.id) items.splice(index, 1);
    });
    this.storage.set(MERGE_FIELD_KEY, items);
    return this.get();
  }
}
