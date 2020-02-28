import { Component, OnInit, Input } from "@angular/core";
import { MergeObject } from "src/app/stores/merge-object-store";
import { Observable } from "rxjs";
import { AppState } from "src/app/app.state";
import { Store } from "@ngrx/store";
import { MergeField } from "src/app/stores/merge-field-store";
import { take } from "rxjs/operators";
import { addMergeToFieldsAction } from "src/app/stores/merge-object-store/merge-object.actions";

@Component({
  selector: "app-merge-object-component",
  templateUrl: "./merge-object-component.component.html",
  styleUrls: ["./merge-object-component.component.scss"]
})
export class MergeObjectComponentComponent implements OnInit {
  @Input()
  selectedMergeObject: MergeObject;

  mergeFields$: Observable<MergeField[]>;

  constructor(private store: Store<AppState>) {}

  getMergeField(id: number): MergeField {
    let foundField: MergeField;
    var mergeFields = this.mergeFields$.pipe(take(1)).subscribe(arr => {
      let result = arr.filter(field => {
        return field.id == id;
      });
      foundField = result[0];
    });
    return foundField;
  }

  updateView() {
    // this.allMergeField.forEach(mergeField => {
    //   // check with bern
    //   if (this.selectedItemObject) {
    //     this.selectedItemObject.forEach(selectedMergeField => {
    //       if (mergeField.id == selectedMergeField.id) {
    //         let index = this.allMergeField.indexOf(mergeField);
    //         this.allMergeField.splice(index, 1);
    //       }
    //     });
    //   }
    // });
  }

  ngOnInit() {
    this.mergeFields$ = this.store.select(x => x.mergeField.list);
  }

  addMergeObject() {
    //this.store.dispatch(addNewObject({ fieldName: string, selectedMergeObject }));
  }

  addMergeField($evt) {
    let fieldId = parseInt($evt.srcElement.value);
    let newField = this.getMergeField(fieldId);
    this.store.dispatch(
      addMergeToFieldsAction({
        field: newField,
        model: this.selectedMergeObject
      })
    );
  }
}
