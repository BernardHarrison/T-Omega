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
    let items = <MergeObject[]>this.storage.get(MERGE_OBJECT_KEY);
    if (!(items instanceof Array)) storage.set(MERGE_OBJECT_KEY, []);
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
    entity.fields = [];
    entity.objects = [];
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
    let currentItem;
    items.forEach((item, index) => {
      if (item.id == model.id) {
        currentItem = item;
        if (!item.fields) {
          item.fields = [];
          item.fields.push(field);
        } else {
          item.fields.push(field);
        }
      }
    });
    this.storage.set(MERGE_OBJECT_KEY, items);
    return of(currentItem);
  }

  addObject(field: string, model: MergeObject): Observable<MergeObject> {
    let items = <MergeObject[]>this.storage.get(MERGE_OBJECT_KEY);
    let currentItem;
    items.forEach((item, index) => {
      if (item.id == model.id) {
        currentItem = item;
        let mergeObject = new MergeObject();
        mergeObject.fieldName = field;
        mergeObject.id = Math.floor(Math.random() * 10000);
        mergeObject.fields = [];
        mergeObject.objects = [];
        if (!item.objects) {
          item.objects.push(mergeObject);
        } else {
          item.objects.push(mergeObject);
        }
      }
    });
    this.storage.set(MERGE_OBJECT_KEY, items);
    return of(currentItem);
  }

  removeField(
    field: MergeField,
    model: MergeObject
  ): Observable<MergeObject[]> {
    let items = <MergeObject[]>this.storage.get(MERGE_OBJECT_KEY);
    items.forEach((item, index) => {
      if (item.id == model.id) {
        item.fields.forEach(mergeField => {
          if (mergeField.id == field.id) {
            item.fields.splice(index, 1);
          }
        });
      }
    });
    //throw new Error("Method not implemented.");
    this.storage.set(MERGE_OBJECT_KEY, items);
    return this.get();
  }
}
