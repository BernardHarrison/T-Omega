import {
  Component,
  OnInit,
  Inject,
  TemplateRef,
  ViewChild
} from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable, from } from "rxjs";

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
  creating$: Observable<boolean>;
  updating$: Observable<boolean>;

  loadingError$: Observable<string>;
  creatingError$: Observable<Error>;

  modalRef: BsModalRef;
  types: any;

  //mergeField: MergeField = new MergeField();
  mergeField: MergeField;

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
  }

  onCreate(f) {
    this.mergeField = new MergeField(
      Math.floor(Math.random() * 10),
      f.value.name,
      f.value.type
    );

    this.store.dispatch(this.actions.create(this.mergeField));
    this.creatingError$ = this.store.select(
      state => state.mergeFieldState.createApiState.error
    );
    //TODO: figure out how to handle errors
    this.modalRef.hide();
  }

  openModal(template: TemplateRef<any>, mergeField: MergeField) {
    this.mergeField = mergeField;
    this.modalRef = this.modalService.show(template);
  }

  onUpdate() {
    this.store.dispatch(this.actions.update(this.mergeField));
    //TODO: figure out how to handle errors
    this.modalRef.hide();
  }

  onDelete(m: MergeField) {
    this.store.dispatch(this.actions.delete(m));
  }
}
