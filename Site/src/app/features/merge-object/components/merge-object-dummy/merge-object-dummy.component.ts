import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { MergeObject } from "src/app/stores/merge-object-store";
import { AppState } from "src/app/app.state";
import { Store } from "@ngrx/store";
import { MergeField } from "src/app/stores/merge-field-store";
import { addObjectToObjectsAction } from "src/app/stores/merge-object-store/merge-object.actions";

const DEFAULT_PLACEHOLDER = "DEFAULT_PLACEHOLDER";

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

  @Output() addMergeFieldRequest = new EventEmitter<{
    field: MergeField;
    model: MergeObject;
  }>();

  selectedField: any = DEFAULT_PLACEHOLDER;
  //temporary
  displayInput: boolean = false;

  constructor(private store: Store<AppState>) {}

  get availableMergeFields(): MergeField[] {
    this.selectedField = DEFAULT_PLACEHOLDER;
    return this.mergeFields.filter(x =>
      this.selectedMergeObject.fields.find(y => y.id == x.id) ? false : true
    );
  }

  get defaultPlaceholder() {
    return DEFAULT_PLACEHOLDER;
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

  addMergeField() {
    this.addMergeFieldRequest.emit({
      field: this.selectedField,
      model: this.selectedMergeObject
    });
  }
}
