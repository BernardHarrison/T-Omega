import { Injectable, Inject } from "@angular/core";
import { LOCAL_STORAGE, StorageService } from "ngx-webstorage-service";
import { CrudStateApiInterface } from "../stores/api-entity";
import { MergeField } from "../stores/merge-field-store";
import { of, Observable } from "rxjs";
import { delay } from "rxjs/operators";

const MERGE_FIELD_KEY = "MERGE_FIELD_KEY";

@Injectable({
  providedIn: "root"
})
export class MergeFieldApiService implements CrudStateApiInterface<MergeField> {
  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {
    storage.set(MERGE_FIELD_KEY, []);
  }

  get(): Observable<MergeField[]> {
    let items = <MergeField[]>this.storage.get(MERGE_FIELD_KEY);
    if (!items) {
      this.storage.set(MERGE_FIELD_KEY, []);
      return this.get();
    }
    return of(items).pipe(
      delay(1000)
      //,mergeMap(x=> throwError(new Error("Api Error")))
    );
  }
  create(entity: MergeField): import("rxjs").Observable<MergeField[]> {
    let items = <MergeField[]>this.storage.get(MERGE_FIELD_KEY);
    this.storage.set(MERGE_FIELD_KEY, [...items, entity]);
    return this.get();
  }
  update(entity: MergeField): import("rxjs").Observable<MergeField[]> {
    let items = <MergeField[]>this.storage.get(MERGE_FIELD_KEY);

    return this.get();
  }
  delete(entity: MergeField): import("rxjs").Observable<MergeField[]> {
    let items = <MergeField[]>this.storage.get(MERGE_FIELD_KEY);
    items.forEach((item, index) => {
      if (item.name == entity.name) items.splice(index, 1);
    });
    this.storage.set(MERGE_FIELD_KEY, items);
    return this.get();
  }
}
