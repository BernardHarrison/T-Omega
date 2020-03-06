import { Injectable, Inject } from "@angular/core";

import { StorageService, LOCAL_STORAGE } from "ngx-webstorage-service";
import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";
import { MergeObject, IMergeObjectApi } from "../stores/merge-object-store";
import { MergeField } from "../stores/merge-field-store";

const MERGE_OBJECT_KEY = "MERGE_OBJECT_KEY";
const PARENT_ID = "parentId";

@Injectable({
  providedIn: "root"
})
export class MergeObjectApiService implements IMergeObjectApi {
  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {
    let items = <MergeObject[]>this.storage.get(MERGE_OBJECT_KEY);
    if (!(items instanceof Array)) storage.set(MERGE_OBJECT_KEY, []);
  }

  private createNew(entity: MergeObject) {
    return {
      ...entity,
      id: Math.floor(Math.random() * 1000000),
      fields: [],
      objects: []
    }
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

  populateChildren(item: MergeObject, items: MergeObject[]) {
    item.objects = items.filter(x => x[PARENT_ID] == x.id);
    item.objects.forEach(element => this.populateChildren(element, items));
  }

  root(mergeObject: MergeObject): Observable<MergeObject> {
    let items = <MergeObject[]>this.storage.get(MERGE_OBJECT_KEY);
    let item = { ...mergeObject };
    while (item[PARENT_ID]) {
      item = items.find(x => x.id == item[PARENT_ID]);
    }
    this.populateChildren(item, items);
    return of(item);
  }

  create(entity: MergeObject): Observable<MergeObject[]> {
    let items = <MergeObject[]>this.storage.get(MERGE_OBJECT_KEY);
    items.push(this.createNew(entity));
    this.storage.set(MERGE_OBJECT_KEY, items);
    return this.get();
  }

  update(entity: MergeObject): Observable<MergeObject[]> {
    let items = <MergeObject[]>this.storage.get(MERGE_OBJECT_KEY);
    items = items.filter(x => x.id != entity.id);
    items.push(entity);
    this.storage.set(MERGE_OBJECT_KEY, items);
    return this.get();
  }

  delete(entity: MergeObject): Observable<MergeObject[]> {
    let items = <MergeObject[]>this.storage.get(MERGE_OBJECT_KEY);
    items = items.filter(x => x.id != entity.id);
    this.storage.set(MERGE_OBJECT_KEY, items);
    return this.get();
  }

  addField(field: MergeField, mergeObject: MergeObject): Observable<MergeObject> {
    let items = <MergeObject[]>this.storage.get(MERGE_OBJECT_KEY);
    let item = items.find(x => x.id == mergeObject.id);
    item.fields.push(field);
    this.storage.set(MERGE_OBJECT_KEY, items);
    return this.root(item);
  }

  addObject(fieldName: string, mergeObject: MergeObject): Observable<MergeObject> {
    let items = <MergeObject[]>this.storage.get(MERGE_OBJECT_KEY);
    let item = items.find(x => x.id == mergeObject.id);
    let newObj = this.createNew({ fieldName, id: null, fields: null, objects: null });
    newObj[PARENT_ID] = item.id;
    items.push(newObj);
    this.storage.set(MERGE_OBJECT_KEY, items);
    return this.root(item);

  }

  removeField(field: MergeField, mergeObject: MergeObject): Observable<MergeObject> {
    let items = <MergeObject[]>this.storage.get(MERGE_OBJECT_KEY);
    let item = items.find(x => x.id == mergeObject.id);
    item.fields = item.fields.filter(x => x.id != field.id);
    this.storage.set(MERGE_OBJECT_KEY, items);
    return this.root(item);
  }
}
