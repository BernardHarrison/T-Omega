import { Injectable, Inject } from "@angular/core";
import { LOCAL_STORAGE, StorageService } from "ngx-webstorage-service";
import { Observable, of, throwError } from "rxjs";
import { delay, mergeMap } from "rxjs/operators";
import {
  ModelDefinition,
  IModelDefinitionApi,
  FieldsObject
} from "../stores/model-builder-store";

const MODEL_BUILDER_LOCAL_STORAGE_KEY = "MODEL_BUILDER_LOCAL_STORAGE_KEY";

@Injectable({
  providedIn: "root"
})
export class ModelBuilderLocalApi implements IModelDefinitionApi {
  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {
    let items = <ModelDefinition[]>(
      this.storage.get(MODEL_BUILDER_LOCAL_STORAGE_KEY)
    );
    this.storage.set(MODEL_BUILDER_LOCAL_STORAGE_KEY, [
      //{ id: 1, name: "isname", fields: [{}] }
    ]);
  }
  get(): Observable<ModelDefinition[]> {
    let items = <ModelDefinition[]>(
      this.storage.get(MODEL_BUILDER_LOCAL_STORAGE_KEY)
    );
    return of(items).pipe(
      delay(1000)
      // mergeMap(x => throwError(new Error("Api Error")))
    );
  }
  create(entity: ModelDefinition): Observable<ModelDefinition[]> {
    let items = <ModelDefinition[]>(
      this.storage.get(MODEL_BUILDER_LOCAL_STORAGE_KEY)
    );
    entity.id = Math.floor(Math.random() * 10000);
    items.unshift(entity);
    this.storage.set(MODEL_BUILDER_LOCAL_STORAGE_KEY, items);
    return this.get();
  }
  update(entity: ModelDefinition): Observable<ModelDefinition[]> {
    let items = <ModelDefinition[]>(
      this.storage.get(MODEL_BUILDER_LOCAL_STORAGE_KEY)
    );
    items.forEach((item, index) => {
      if (item.id == entity.id) items.splice(index, 1);
    });
    items.unshift(entity);
    this.storage.set(MODEL_BUILDER_LOCAL_STORAGE_KEY, items);
    return this.get();
  }
  delete(entity: ModelDefinition): Observable<ModelDefinition[]> {
    let items = <ModelDefinition[]>(
      this.storage.get(MODEL_BUILDER_LOCAL_STORAGE_KEY)
    );
    items.forEach((item, index) => {
      if (item.id == entity.id) items.splice(index, 1);
    });
    this.storage.set(MODEL_BUILDER_LOCAL_STORAGE_KEY, items);
    return this.get();
  }

  addField(entity: FieldsObject): Observable<ModelDefinition[]> {
    let items = <ModelDefinition[]>(
      this.storage.get(MODEL_BUILDER_LOCAL_STORAGE_KEY)
    );
    items.forEach((item, index) => {
      if (item.id == entity.currentModelDefinition.id) {
        item.fields.push(entity.selecteMergeField);
      }
    });
    this.storage.set(MODEL_BUILDER_LOCAL_STORAGE_KEY, items);
    return this.get();
  }
  removeField(entity: FieldsObject): Observable<ModelDefinition[]> {
    let items = <ModelDefinition[]>(
      this.storage.get(MODEL_BUILDER_LOCAL_STORAGE_KEY)
    );
    items.forEach((item, index) => {
      if (item.id == entity.currentModelDefinition.id) {
        item.fields.forEach((field, index) => {
          if (field.id == entity.selecteMergeField.id)
            item.fields.splice(index, 1);
        });
      }
    });
    //throw new Error("Method not implemented.");
    this.storage.set(MODEL_BUILDER_LOCAL_STORAGE_KEY, items);
    return this.get();
  }
}
