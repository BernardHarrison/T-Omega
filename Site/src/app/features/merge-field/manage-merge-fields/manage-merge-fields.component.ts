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
import { map, pluck, tap } from "rxjs/operators";
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
  busy$: Observable<boolean>;
  error$: Observable<string>;
  isError$: Observable<boolean>;

  updateMergeField: MergeField = new MergeField();
  createMergeField: MergeField = new MergeField();

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
    this.busy$ = merge(
      this.store.select(x => x.mergeFieldState.loadApiState.busy),
      this.store.select(x => x.mergeFieldState.createApiState.busy),
      this.store.select(x => x.mergeFieldState.updateApiState.busy),
      this.store.select(x => x.mergeFieldState.deleteApiState.busy)
    );

    this.error$ = merge(
      this.store.select(x => x.mergeFieldState.loadApiState.error)
      // this.store.select(x => x.mergeFieldState.createApiState.error),
      // this.store.select(x => x.mergeFieldState.updateApiState.error),
      // this.store.select(x => x.mergeFieldState.deleteApiState.error),
    ).pipe(
      map(err => err && err.message),
      tap(console.log)
    );

    this.isError$ = this.error$.pipe(
      map(err => err != null)
      //tap(console.log)
    );
  }

  onCreate() {
    this.store.dispatch(this.actions.create(this.createMergeField));
    this.createMergeField = new MergeField();
    this.modalRef.hide();
  }

  openModal(template: TemplateRef<any>, mergeField: MergeField) {
    this.createMergeField.type = "String";
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
