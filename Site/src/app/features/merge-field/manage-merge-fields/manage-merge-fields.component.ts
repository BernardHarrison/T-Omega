import {
  Component,
  OnInit,
  Inject,
  TemplateRef,
  ViewChild
} from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable, from, merge } from "rxjs";

import { BsModalRef, BsModalService, ModalDirective } from "ngx-bootstrap";
import { NgForm } from "@angular/forms";
import { map, pluck } from "rxjs/operators";
import {
  MergeFieldAppState,
  MergeFieldTypes,
  MergeFieldActions,
  MergeField
} from "src/app/stores/merge-field-api-store/merge-field-api-store.module";
import { async } from "@angular/core/testing";

@Component({
  selector: "app-manage-merge-fields",
  templateUrl: "./manage-merge-fields.component.html",
  styleUrls: ["./manage-merge-fields.component.scss"]
})
export class ManageMergeFieldsComponent implements OnInit {
  list$: Observable<MergeField[]>;
  loading$: Observable<boolean>;

  updateMergeField: MergeField = new MergeField();
  createMergeField: MergeField = new MergeField();

  creating$: Observable<boolean>;
  updating$: Observable<boolean>;
  deleting$: Observable<boolean>;

  errorLoading: Error;
  errorCreating: Error;
  errorUpdating: Error;
  errorDeleting: Error;

  modalRef: BsModalRef;
  types: any;

  constructor(
    private store: Store<MergeFieldAppState>,
    private modalService: BsModalService,
    private actions: MergeFieldActions
  ) {
    this.types = Object.keys(MergeFieldTypes).filter(k => isNaN(Number(k)));
  }

  ngOnInit() {
    this.store.dispatch(this.actions.load());
    this.list$ = this.store.select(state => state.mergeFieldState.list);

    this.creating$ = this.store.select(
      state => state.mergeFieldState.createApiState.busy
    );

    this.updating$ = this.store.select(
      state => state.mergeFieldState.updateApiState.busy
    );

    this.deleting$ = this.store.select(
      state => state.mergeFieldState.deleteApiState.busy
    );

    this.store
      .select(state => state.mergeFieldState.loadApiState.error)
      .subscribe(error => (this.errorLoading = error));
    this.store
      .select(state => state.mergeFieldState.createApiState.error)
      .subscribe(error => (this.errorCreating = error));
    this.store
      .select(state => state.mergeFieldState.updateApiState.error)
      .subscribe(error => (this.errorUpdating = error));
    this.store
      .select(state => state.mergeFieldState.deleteApiState.error)
      .subscribe(error => (this.errorDeleting = error));
  }

  onCreate() {
    this.store.dispatch(this.actions.create(this.createMergeField));
    this.createMergeField = new MergeField();
    this.modalRef.hide();
  }

  openModal(template: TemplateRef<any>, mergeField: MergeField) {
    this.updateMergeField = mergeField;
    this.modalRef = this.modalService.show(template);
  }

  onUpdate() {
    this.store.dispatch(this.actions.update(this.updateMergeField));
    this.modalRef.hide();
  }

  onDelete(m: MergeField) {
    this.store.dispatch(this.actions.delete(m));
  }
}
