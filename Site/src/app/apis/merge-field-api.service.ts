import { Injectable, Inject } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { MergeFieldApi, MergeField } from '../features/merge-field';
import { Observable, of, interval } from 'rxjs';
import { map, take } from 'rxjs/operators';

const MERGE_FIELD_KEY = "MERGE_FIELD_KEY"

@Injectable({
  providedIn: 'root'
})
export class MergeFieldApiService implements MergeFieldApi {

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {
    storage.set(MERGE_FIELD_KEY, [{ name: "blahssss", type: "blahssss" }]);
  }

  get(): Observable<MergeField[]> {
    let mergeFields = <Array<MergeField>>this.storage.get(MERGE_FIELD_KEY);
    return of(mergeFields);
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
