import { Injectable, Inject } from "@angular/core";
import { ModelDefinition } from "../stores/model-builder-store/model-builder-store.module";
import { CrudStateApiInterface } from "../stores/api-entity";
import { LOCAL_STORAGE, StorageService } from "ngx-webstorage-service";
import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";

const MODEL_BUILDER_LOCAL_STORAGE_KEY = "MODEL_BUILDER_LOCAL_STORAGE_KEY";

@Injectable({
  providedIn: "root"
})
export class ModelBuilderLocalApi
  implements CrudStateApiInterface<ModelDefinition> {
  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {
    let items = <ModelDefinition[]>(
      this.storage.get(MODEL_BUILDER_LOCAL_STORAGE_KEY)
    );
    this.storage.set(MODEL_BUILDER_LOCAL_STORAGE_KEY, [
      { id: 1, name: "isname", fields: [{}] }
    ]);
  }
  get(): Observable<ModelDefinition[]> {
    let items = <ModelDefinition[]>(
      this.storage.get(MODEL_BUILDER_LOCAL_STORAGE_KEY)
    );
    return of(items).pipe(
      delay(1000)
      //,mergeMap(x=> throwError(new Error("Api Error")))
    );
  }
  create(entity: ModelDefinition): Observable<ModelDefinition[]> {
    let items = <ModelDefinition[]>(
      this.storage.get(MODEL_BUILDER_LOCAL_STORAGE_KEY)
    );
    entity.id = Math.floor(Math.random() * 10000);
    items.push(entity);
    this.storage.set(MODEL_BUILDER_LOCAL_STORAGE_KEY, items);
    return this.get();
  }
  update(entity: ModelDefinition): Observable<ModelDefinition[]> {
    let items = <ModelDefinition[]>(
      this.storage.get(MODEL_BUILDER_LOCAL_STORAGE_KEY)
    );
    items.filter(item => {
      item.id != entity.id;
    });
    items.push(entity);
    this.storage.set(MODEL_BUILDER_LOCAL_STORAGE_KEY, items);
    return this.get();
  }
  delete(entity: ModelDefinition): Observable<ModelDefinition[]> {
    let items = <ModelDefinition[]>(
      this.storage.get(MODEL_BUILDER_LOCAL_STORAGE_KEY)
    );
    items.filter(item => {
      item.id != entity.id;
    });
    this.storage.set(MODEL_BUILDER_LOCAL_STORAGE_KEY, items);
    return this.get();
  }
}
