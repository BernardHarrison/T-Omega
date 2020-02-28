import { Injectable } from "@angular/core";
import { MergeField } from "src/app/stores/merge-field-store";
import { Observable, of } from "rxjs";
import { MergeObject } from "src/app/stores/merge-object-store";

@Injectable({
  providedIn: "root"
})
export class MergeObjectFeatureService {
  constructor() {}

  getNotSelectedMergeFields(
    selectedFields: MergeField[],
    fieldOptions: MergeField[]
  ): Observable<MergeField[]> {
    fieldOptions.forEach(mergeField => {
      if (selectedFields) {
        selectedFields.forEach(selectedMergeField => {
          if (mergeField.id == selectedMergeField.id) {
            let index = fieldOptions.indexOf(mergeField);
            fieldOptions.splice(index, 1);
          }
        });
      }
    });

    return of(fieldOptions);
  }

  getSelectedMergeObjectById(
    id: number,
    mergeObjects: MergeObject[]
  ): Observable<MergeObject> {
    let selectedMergeObject: MergeObject;
    mergeObjects.forEach(mergeObject => {
      if (mergeObject.id == id) {
        selectedMergeObject = mergeObject;
      }
    });
    return of(selectedMergeObject);
  }
}
