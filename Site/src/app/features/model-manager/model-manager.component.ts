import { Component, OnInit, TemplateRef } from "@angular/core";
import { MergeObject } from "src/app/stores/merge-object-store";
import { BsModalService, BsModalRef } from "ngx-bootstrap";
import { AlertService } from "ngx-alerts";
import { AppState } from "src/app/app.state";
import { Store } from "@ngrx/store";
import * as fromMergeObjectActions from "src/app/stores/merge-object-store/merge-object.actions";
import { Observable } from "rxjs";
import { MergeField } from "src/app/stores/merge-field-store";
import { take } from "rxjs/operators";

const DEFAULT_PLACEHOLDER = "DEFAULT_PLACEHOLDER";

@Component({
  selector: "app-model-manager",
  templateUrl: "./model-manager.component.html",
  styleUrls: ["./model-manager.component.scss"]
})
export class ModelManagerComponent implements OnInit {
  list$: Observable<MergeObject[]>;
  busy$: Observable<boolean>;
  modalRef: BsModalRef;
  createMergeObject: MergeObject = new MergeObject();
  currentModel: MergeObject;
  selectedField: any = DEFAULT_PLACEHOLDER; //Needed to capture the users selcted mergeField
  mergeFields: MergeField[];

  constructor(
    private store: Store<AppState>,
    private modalService: BsModalService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.store.dispatch(fromMergeObjectActions.loadMergeObjectsAction());
    this.list$ = this.store.select(state => state.mergeObjectState.list);
    this.busy$ = this.store.select(state => state.mergeObjectState.busy);

    this.store
      .select(state => state.mergeField.list)
      .subscribe(x => (this.mergeFields = x));
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  onCreate() {
    this.alertService.success("Creating New Model");
    this.store.dispatch(
      fromMergeObjectActions.createMergeObjectAction({
        payload: this.createMergeObject
      })
    );
    this.currentModel = this.createMergeObject;
    this.createMergeObject = new MergeObject();
    this.modalRef.hide();
  }

  onDelete() {
    this.alertService.danger("Deleting Model");
    this.store.dispatch(
      fromMergeObjectActions.deleteMergeObjectAction({
        payload: this.currentModel
      })
    );
    this.currentModel = null;
  }

  onSelectModel(mergeObject: MergeObject) {
    this.currentModel = mergeObject;
  }

  updateSelectedItem() {
    this.store
      .select(state => state.mergeObjectState.item)
      .subscribe(x => (this.currentModel = x));
  }

  onCreateMergeObject() {
    this.alertService.info("Adding Merge Object");
    this.store.dispatch(
      fromMergeObjectActions.addObjectToObjectsAction({
        fieldName: this.createMergeObject.fieldName,
        model: this.currentModel
      })
    );
    this.updateSelectedItem();
    this.modalRef.hide();
  }

  get availableMergeFields(): MergeField[] {
    this.selectedField = DEFAULT_PLACEHOLDER;
    //TODO: Remove this Array check. Let it fail.
    return this.currentModel.fields instanceof Array
      ? this.mergeFields.filter(x =>
          this.currentModel.fields.find(y => y.id == x.id) ? false : true
        )
      : [];
  }

  addMergeField(field: MergeField) {
    this.alertService.warning("Adding Merge Field");
    this.store.dispatch(
      fromMergeObjectActions.addMergeToFieldsAction({
        field,
        model: this.currentModel
      })
    );
    this.updateSelectedItem();
  }

  removeMergeField(field: MergeField) {
    this.alertService.danger("Removing Merge Field");
    this.store.dispatch(
      fromMergeObjectActions.removeMergeFromFieldsAction({
        field,
        model: this.currentModel
      })
    );
    this.updateSelectedItem();
  }
}
