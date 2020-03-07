import { Component, OnInit, Input, Output, TemplateRef } from "@angular/core";
import { MergeObject } from "src/app/stores/merge-object-store";
import { AppState } from "src/app/app.state";
import { Store } from "@ngrx/store";
import { MergeField } from "src/app/stores/merge-field-store";
import {
  addMergeToFieldsAction,
  removeMergeFromFieldsAction,
  addObjectToObjectsAction,
  removeMergeObjectAction
} from "src/app/stores/merge-object-store/merge-object.actions";
import { take } from "rxjs/operators";
import { BsModalRef, BsModalService } from "ngx-bootstrap";
import { AlertService } from "ngx-alerts";

const DEFAULT_PLACEHOLDER = "DEFAULT_PLACEHOLDER";

@Component({
  selector: "app-merge-object-item",
  templateUrl: "./merge-object-item.component.html",
  styleUrls: ["./merge-object-item.component.scss"]
})
export class MergeObjectItemComponent implements OnInit {
  constructor(
    private store: Store<AppState>,
    private modalService: BsModalService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.store
      .select(state => state.mergeField.list)
      .pipe(take(1))
      .subscribe(x => (this.mergeFields = x));
  }

  @Input() mergeObject: MergeObject;

  newObjectFieldName: string;
  selectedField: any = DEFAULT_PLACEHOLDER; //Needed to capture the users selcted mergeField
  modalRef: BsModalRef;

  mergeFields: MergeField[];

  get defaultPlaceholder() {
    return DEFAULT_PLACEHOLDER;
  }

  get availableMergeFields(): MergeField[] {
    this.selectedField = DEFAULT_PLACEHOLDER;
    //TODO: Remove this Array check. Let it fail.
    return this.mergeObject.fields instanceof Array
      ? this.mergeFields.filter(x =>
          this.mergeObject.fields.find(y => y.id == x.id) ? false : true
        )
      : [];
  }

  addMergeField(field: MergeField) {
    this.alertService.warning("Adding Merge Field");
    this.store.dispatch(
      addMergeToFieldsAction({
        field,
        model: this.mergeObject
      })
    );
  }

  removeMergeField(field: MergeField) {
    this.alertService.danger("Removing Merge Field");
    this.store.dispatch(
      removeMergeFromFieldsAction({
        field,
        model: this.mergeObject
      })
    );
  }

  addMergeObject() {
    this.alertService.info("Adding Merge Object");
    this.store.dispatch(
      addObjectToObjectsAction({
        fieldName: this.newObjectFieldName,
        model: this.mergeObject
      })
    );
    this.newObjectFieldName = null;
    this.modalRef.hide();
  }

  removeMergeObject() {
    this.alertService.danger("Removing Object");
    this.store.dispatch(removeMergeObjectAction({ payload: this.mergeObject }));
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
