import { Component, OnInit, Input } from "@angular/core";
import { MergeObject } from "src/app/stores/merge-object-store";
import { AppState } from "src/app/app.state";
import { Store } from "@ngrx/store";
import { MergeField } from "src/app/stores/merge-field-store";
import {
  addMergeToFieldsAction,
  addObjectToObjectsAction
} from "src/app/stores/merge-object-store/merge-object.actions";

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
  addObjectName: string;

  //temporary
  displayInput: boolean = false;

  constructor(private store: Store<AppState>) {}

  get availableMergeFields(): MergeField[] {
    return this.selectedMergeObject &&
      this.selectedMergeObject.fields instanceof Array
      ? this.mergeFields.filter(
          x => !this.selectedMergeObject.fields.includes(x)
        )
      : [];
  }

  getMergeField(id: number): MergeField {
    return this.mergeFields.find(x => x.id == id);
  }

  ngOnInit() {}

  openDialog() {
    this.displayInput = true;
  }

  addMergeObject() {
    this.store.dispatch(
      addObjectToObjectsAction({
        fieldName: this.addObjectName,
        model: this.selectedMergeObject
      })
    );
    this.displayInput = false;
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
