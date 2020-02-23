import { Component, OnInit, TemplateRef } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable, from, merge } from "rxjs";

import { BsModalRef, BsModalService, ModalDirective } from "ngx-bootstrap";
import { NgForm } from "@angular/forms";
import { map } from "rxjs/operators";

import { async } from "@angular/core/testing";

import * as fromActions from "src/app/stores/merge-field-store/merge-field.actions";

import { AlertService } from "ngx-alerts";
import {
  MergeField,
  MergeFieldTypes,
  MergeFieldAppState
} from "src/app/stores/merge-field-store";

@Component({
  selector: "app-manage-merge-fields",
  templateUrl: "./manage-merge-fields.component.html",
  styleUrls: ["./manage-merge-fields.component.scss"]
})
export class ManageMergeFieldsComponent implements OnInit {
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
