import { Injectable, Inject } from "@angular/core";
import { LOCAL_STORAGE, StorageService } from "ngx-webstorage-service";

const MERGE_FIELD_KEY = "MERGE_FIELD_KEY";

@Injectable({
  providedIn: "root"
})
export class MergeFieldApiService {
  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {
    storage.set(MERGE_FIELD_KEY, [{ name: "blahssss", type: "blahssss" }]);
  }


}
