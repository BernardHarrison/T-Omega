import { Component, OnInit, TemplateRef } from "@angular/core";
import {
  MergeField,
  MergeFieldAppState,
  MergeFieldTypes
} from "src/app/stores/merge-field-store";
import { BsModalRef, BsModalService } from "ngx-bootstrap";
import { Store } from "@ngrx/store";
import { AlertService } from "ngx-alerts";
import * as fromActions from "src/app/stores/merge-field-store/merge-field.actions";
import { Observable } from "rxjs/internal/Observable";

@Component({
  selector: "app-merge-field-list",
  templateUrl: "./merge-field-list.component.html",
  styleUrls: ["./merge-field-list.component.scss"]
})
export class MergeFieldListComponent implements OnInit {
  list$: Observable<MergeField[]>;
  busy$: Observable<boolean>;

  updateMergeField: MergeField = new MergeField();
  createMergeField: MergeField = new MergeField();

  modalRef: BsModalRef;
  types: any;

  constructor(
    private store: Store<MergeFieldAppState>,
    private modalService: BsModalService,
    private alertService: AlertService
  ) {
    this.types = Object.keys(MergeFieldTypes).filter(k => isNaN(Number(k)));
  }

  ngOnInit() {
    this.store.dispatch(fromActions.mergeFieldApiBusyAction({ payload: true }));
    this.store.dispatch(fromActions.loadMergeFieldsAction());
    this.list$ = this.store.select(state => state.mergeField.list);
    this.busy$ = this.store.select(state => state.mergeField.busy);
  }

  onCreate() {
    this.alertService.success("Creating Merge Field");
    this.store.dispatch(fromActions.mergeFieldApiBusyAction({ payload: true }));
    this.store.dispatch(
      fromActions.createMergeFieldAction({
        payload: this.createMergeField
      })
    );
    this.createMergeField = new MergeField();
    this.modalRef.hide();
  }

  openModal(template: TemplateRef<any>, mergeField: MergeField) {
    this.createMergeField.type = "String";
    this.updateMergeField = mergeField;
    this.modalRef = this.modalService.show(template);
  }

  onUpdate() {
    this.alertService.warning("Updating Merge Field");
    this.store.dispatch(fromActions.mergeFieldApiBusyAction({ payload: true }));
    this.store.dispatch(
      fromActions.updateMergeFieldAction({ payload: this.updateMergeField })
    );
    this.modalRef.hide();
  }

  onDelete(m: MergeField) {
    this.alertService.danger("Deleting Merge Field");
    this.store.dispatch(fromActions.mergeFieldApiBusyAction({ payload: true }));
    this.store.dispatch(fromActions.deleteMergeFieldAction({ payload: m }));
  }
}
