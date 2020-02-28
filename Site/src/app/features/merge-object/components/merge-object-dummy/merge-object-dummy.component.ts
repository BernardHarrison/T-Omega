import { Component, OnInit, Input } from "@angular/core";
import { MergeObject } from "src/app/stores/merge-object-store";
import { AppState } from "src/app/app.state";
import { Store } from "@ngrx/store";
import { MergeField } from "src/app/stores/merge-field-store";
import { addMergeToFieldsAction } from "src/app/stores/merge-object-store/merge-object.actions";

@Component({
  selector: "app-merge-object-dummy-component",
  templateUrl: "./merge-object-dummy.component.html",
  styleUrls: ["./merge-object-dummy.component.scss"]
})
export class MergeObjectDummyComponent implements OnInit {
  @Input()
  selectedMergeObject: MergeObject;

  @Input()
  mergeFields: MergeField[];

  constructor(private store: Store<AppState>) {}

  get availableMergeFields(): MergeField[] {
    return this.mergeFields.filter(
      x => !this.selectedMergeObject.fields.includes(x)
    );
  }

  getMergeField(id: number): MergeField {
    return this.mergeFields.find(x => x.id == id);
  }

  ngOnInit() {}

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
