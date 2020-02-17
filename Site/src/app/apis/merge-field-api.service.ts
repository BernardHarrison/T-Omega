import { Injectable, Inject } from "@angular/core";
import { LOCAL_STORAGE, StorageService } from "ngx-webstorage-service";

import { Observable, of, throwError } from "rxjs";
import {
  MergeField,
  MergeFieldApiInterface
} from "../stores/merge-field-store";
import { delay, mergeMap } from "rxjs/operators";

const MERGE_FIELD_KEY = "MERGE_FIELD_KEY";

@Injectable({
  providedIn: "root"
})
export class MergeFieldApiService implements MergeFieldApiInterface {
  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {
    storage.set(MERGE_FIELD_KEY, [
      { name: "blahssss", type: "Number" },
      { name: "name2", type: "String" }
    ]);
  }

  get(): Observable<MergeField[]> {
    let mergeFields = <Array<MergeField>>this.storage.get(MERGE_FIELD_KEY);
    return of(mergeFields).pipe(
      delay(2000)
      //mergeMap(x => throwError(new Error("Api Error")))
    );
  }

  create(mergeField: MergeField): Observable<MergeField[]> {
    let mergeFields = <Array<MergeField>>this.storage.get(MERGE_FIELD_KEY);
    this.storage.set(MERGE_FIELD_KEY, [...mergeFields, mergeField]);
    return this.get();
  }

  update(name: string, mergeField: MergeField): Observable<MergeField[]> {
    let mergeFields = <Array<MergeField>>this.storage.get(MERGE_FIELD_KEY);
    let foundItem = mergeFields.find(item => item.name == name);
    if (!foundItem) return Observable.throw(new Error("Entity not found"));
    foundItem.name = mergeField.name;
    foundItem.type = mergeField.type;
    this.storage.set(MERGE_FIELD_KEY, mergeFields);
    return this.get();
  }

  delete(mergeField: MergeField): Observable<MergeField[]> {
    let mergeFields = <Array<MergeField>>this.storage.get(MERGE_FIELD_KEY);
    mergeFields = mergeFields.filter(item => item.name != mergeField.name);
    this.storage.set(MERGE_FIELD_KEY, mergeFields);
    return this.get();
  }
}
