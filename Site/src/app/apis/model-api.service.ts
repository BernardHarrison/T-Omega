import { Injectable, Inject } from "@angular/core";

import { Observable, of } from "rxjs";
import { StorageService, LOCAL_STORAGE } from "ngx-webstorage-service";
import { delay } from "rxjs/operators";
import {
  IModelObjectApi,
  MergeObject,
  MergeModel
} from "../stores/model-store";

const MODEL_KEY = "MODEL_KEY";

@Injectable({
  providedIn: "root"
})
export class ModelApiService implements IModelObjectApi {
  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {
    let items = <MergeObject[]>this.storage.get(MODEL_KEY);
    if (!(items instanceof Array)) storage.set(MODEL_KEY, []);
  }

  get(): Observable<MergeModel[]> {
    let items = <MergeModel[]>this.storage.get(MODEL_KEY);
    if (!items) {
      this.storage.set(MODEL_KEY, []);
      return this.get();
    }
    return of(items).pipe(
      delay(1000)
      //mergeMap(x => throwError(new Error("Api Error")))
    );
  }
  create(entity: MergeModel): Observable<MergeModel[]> {
    let items = <MergeModel[]>this.storage.get(MODEL_KEY);
    entity.id = Math.floor(Math.random() * 10000);
    entity.fields = [];
    entity.objects = [];
    items.push(entity);
    this.storage.set(MODEL_KEY, items);
    return this.get();
  }
  update(entity: MergeModel): Observable<MergeModel[]> {
    let items = <MergeModel[]>this.storage.get(MODEL_KEY);
    items.forEach((item, index) => {
      if (item.id == entity.id) items.splice(index, 1);
    });
    items.push(entity);
    this.storage.set(MODEL_KEY, items);
    return this.get();
  }
  delete(entity: MergeModel): Observable<MergeModel[]> {
    let items = <MergeModel[]>this.storage.get(MODEL_KEY);
    items.forEach((item, index) => {
      if (item.id == entity.id) items.splice(index, 1);
    });
    this.storage.set(MODEL_KEY, items);
    return this.get();
  }
}
