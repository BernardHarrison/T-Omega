import { Component, OnInit, TemplateRef } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable, from, merge } from "rxjs";

import { BsModalRef, BsModalService, ModalDirective } from "ngx-bootstrap";
import { NgForm } from "@angular/forms";
import { map } from "rxjs/operators";

import { async } from "@angular/core/testing";
import * as fromReducer from "src/app/stores/merge-field-store/merge-field.reducer";
import * as fromActions from "src/app/stores/merge-field-store/merge-field.actions";

@Component({
  selector: "app-manage-merge-fields",
  templateUrl: "./manage-merge-fields.component.html",
  styleUrls: ["./manage-merge-fields.component.scss"]
})
export class ManageMergeFieldsComponent implements OnInit {
  list$: Observable<fromReducer.MergeField[]>;
  busy$: Observable<boolean>;
  error$: Observable<string>;
  isError: boolean;

  updateMergeField: fromReducer.MergeField = new fromReducer.MergeField();
  createMergeField: fromReducer.MergeField = new fromReducer.MergeField();

  modalRef: BsModalRef;
  types: any;

  constructor(
    private store: Store<fromReducer.MergeFieldState>,
    private modalService: BsModalService
  ) {
    this.types = Object.keys(fromReducer.MergeFieldTypes).filter(k =>
      isNaN(Number(k))
    );
  }

  ngOnInit() {
    this.store.dispatch(fromActions.loadMergeFieldsAction());
    this.list$ = this.store.pipe(select(state => state.list));
    this.busy$ = this.store.select(state => state.busy);

    this.error$ = this.store
      .select(state => state.error)
      .pipe(map(err => err && err.message));
    this.error$.subscribe(err => (this.isError = err != null));
  }

  onCreate() {
    this.store.dispatch(
      fromActions.createMergeFieldAction({
        payload: this.createMergeField
      })
    );
    this.createMergeField = new fromReducer.MergeField();
    this.modalRef.hide();
  }

  openModal(template: TemplateRef<any>, mergeField: fromReducer.MergeField) {
    this.createMergeField.type = "String";
    this.updateMergeField = mergeField;
    this.modalRef = this.modalService.show(template);
  }

  onUpdate() {
    this.store.dispatch(
      fromActions.updateMergeFieldAction({ payload: this.updateMergeField })
    );
    this.modalRef.hide();
  }

  onDelete(m: fromReducer.MergeField) {
    this.store.dispatch(fromActions.deleteMergeFieldAction({ payload: m }));
  }
}
