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

@Component({
  selector: "app-manage-merge-fields",
  templateUrl: "./manage-merge-fields.component.html",
  styleUrls: ["./manage-merge-fields.component.scss"]
})
export class ManageMergeFieldsComponent implements OnInit {
  list$: Observable<MergeField[]>;
  loading$: Observable<boolean>;
  loadingError$: Observable<string>;

  modalRef: BsModalRef;
  types: any;

  mergeField: MergeField = new MergeField();

  constructor(
    private store: Store<MergeFieldAppState>,
    private modalService: BsModalService,
    private actions: MergeFieldActions
  ) {
    this.types = Object.keys(MergeFieldTypes).filter(k => isNaN(Number(k)));
  }

  ngOnInit() {
    this.loading$ = this.store.select(
      state => state.mergeFieldState.loadApiState.busy
    );
    this.list$ = this.store.select(state => state.mergeFieldState.list);
    this.loadingError$ = this.store
      .select(state => state.mergeFieldState.loadApiState.error)
      .pipe(map(err => err && err.message));
    this.loadMergeFields();
    console.log(this.types);
  }

  openModal(template: TemplateRef<any>, mergeField: MergeField) {
    // this.store.dispatch(
    //   fromActions.setMergeFieldAction({ payload: mergeField })
    // );

    // this.store
    //   .select(state => state.mergeFieldState.selected)
    //   .subscribe(mergField => {
    //     this.selected = Object.assign(new fromModels.MergeField(), mergField);
    //   });
    this.modalRef = this.modalService.show(template);
  }

  loadMergeFields() {
    this.mergeField = {
      name: "test",
      type: MergeFieldTypes.String
    };
    this.store.dispatch(this.actions.load());
    this.store.dispatch(this.actions.delete(this.mergeField));
    this.store.dispatch(this.actions.update(this.mergeField));

    // this.mergeField = {
    //   name: "test",
    //   type: MergeFieldTypes.String
    // };
    // this.store.dispatch(this.actions.setCollection([this.mergeField]));
  }

  onCreate(f: NgForm) {
    this.store.dispatch(this.actions.create(f.value));

    this.modalRef.hide();
  }

  onUpdate(f: NgForm) {
    this.store.dispatch(this.actions.update(f.value));

    this.modalRef.hide();
  }

  deleteMergeFields() {
    this.store.dispatch(this.actions.delete(this.mergeField));
  }
}
