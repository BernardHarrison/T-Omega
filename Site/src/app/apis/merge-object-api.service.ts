import { Injectable, Inject } from "@angular/core";

import { StorageService, LOCAL_STORAGE } from "ngx-webstorage-service";
import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";
import { MergeObject, IMergeObjectApi } from "../stores/merge-object-store";
import { MergeField } from "../stores/merge-field-store";

const MERGE_OBJECT_KEY = "MERGE_OBJECT_KEY";

@Injectable({
  providedIn: "root"
})
export class MergeObjectApiService implements IMergeObjectApi {
  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {
    storage.set(MERGE_OBJECT_KEY, [
      // {
      //   id: 1,
      //   fieldName: "address",
      //   objects: [{ id: 1, name: "test", type: "String" }]
      // }
    ]);
  }

  get(): Observable<MergeObject[]> {
    let items = <MergeObject[]>this.storage.get(MERGE_OBJECT_KEY);
    if (!items) {
      this.storage.set(MERGE_OBJECT_KEY, []);
      return this.get();
    }
    return of(items).pipe(
      delay(1000)
      //mergeMap(x => throwError(new Error("Api Error")))
    );
  }
  create(entity: MergeObject): Observable<MergeObject[]> {
    let items = <MergeObject[]>this.storage.get(MERGE_OBJECT_KEY);
    entity.id = Math.floor(Math.random() * 10000);
    items.push(entity);
    this.storage.set(MERGE_OBJECT_KEY, items);
    return this.get();
  }
  update(entity: MergeObject): Observable<MergeObject[]> {
    let items = <MergeObject[]>this.storage.get(MERGE_OBJECT_KEY);
    items.forEach((item, index) => {
      if (item.id == entity.id) items.splice(index, 1);
    });
    items.push(entity);
    this.storage.set(MERGE_OBJECT_KEY, items);
    return this.get();
  }
  delete(entity: MergeObject): Observable<MergeObject[]> {
    let items = <MergeObject[]>this.storage.get(MERGE_OBJECT_KEY);
    items.forEach((item, index) => {
      if (item.id == entity.id) items.splice(index, 1);
    });
    this.storage.set(MERGE_OBJECT_KEY, items);
    return this.get();
  }

  addField(field: MergeField, model: MergeObject): Observable<MergeObject> {
    let items = <MergeObject[]>this.storage.get(MERGE_OBJECT_KEY);
    let selectedItem: MergeObject;
    items.forEach((item, index) => {
      if (item.id == model.id) {
        if (!item.fields) {
          item.fields = [];
          item.fields.push(field);
          selectedItem = item;
        } else {
          item.fields.push(field);
          selectedItem = item;
        }
      }
    });
    this.storage.set(MERGE_OBJECT_KEY, items);
    return of(selectedItem);
  }
  removeField(
    field: MergeField,
    model: MergeObject
  ): Observable<MergeObject[]> {
    let items = <MergeObject[]>this.storage.get(MERGE_OBJECT_KEY);
    items.forEach((item, index) => {
      if (item.id == model.id) {
        item.objects.forEach((mergeField, index) => {
          if (mergeField.id == field.id) item.objects.splice(index, 1);
        });
      }
    });
    //throw new Error("Method not implemented.");
    this.storage.set(MERGE_OBJECT_KEY, items);
    return this.get();
  }
}
