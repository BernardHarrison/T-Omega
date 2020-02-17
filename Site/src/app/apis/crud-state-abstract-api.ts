import { Inject } from "@angular/core";
import { LOCAL_STORAGE, StorageService } from "ngx-webstorage-service";

import { Observable, of, throwError } from "rxjs";
import { delay, mergeMap } from 'rxjs/operators';
import { CrudStateApiInterface } from '../stores/api-entity';

export abstract class  AbstractCrudApi<T> implements CrudStateApiInterface<T> {

  abstract storageKeyName: string;
  
  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {  }

  get(): Observable<T[]> {
    let items = <T[]>this.storage.get(this.storageKeyName);
    if(!items){
      this.storage.set(this.storageKeyName, []);
      return this.get();
    }
    return of(items).pipe(
      delay(1000)
      //,mergeMap(x=> throwError(new Error("Api Error")))
      );
  }

  create(entity: T): Observable<T[]> {
    let items = <T[]>this.storage.get(this.storageKeyName);
    this.storage.set(this.storageKeyName, [...items, entity]);
    return this.get();
  }

  update(entity: T): Observable<T[]> {
    let items = <T[]>this.storage.get(this.storageKeyName);
    //TODO
    return this.get();
  }

  delete(entity: T): Observable<T[]> {
    let mergeFields = <T[]>this.storage.get(this.storageKeyName);
    //TODO
    return this.get();
  }
}
