import {
  Component,
  OnInit,
  Inject,
  TemplateRef,
  ViewChild
} from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable, from } from "rxjs";

import * as fromModels from "src/app/stores/merge-field-store";
import * as fromActions from "src/app/stores/merge-field-store/merge-field.actions";
import { MergeFieldAppState } from "src/app/stores/merge-field-store";
import { loadMergeFieldsAction } from "src/app/stores/merge-field-store/merge-field.actions";
import { BsModalRef, BsModalService, ModalDirective } from "ngx-bootstrap";
import { NgForm } from "@angular/forms";
import { map, pluck } from 'rxjs/operators';

@Component({
  selector: "app-manage-merge-fields",
  templateUrl: "./manage-merge-fields.component.html",
  styleUrls: ["./manage-merge-fields.component.scss"]
})
export class ManageMergeFieldsComponent implements OnInit {
  list$: Observable<fromModels.MergeField[]>;
  loading$: Observable<boolean>;
  selected: fromModels.MergeField;
  loadingError$: Observable<string>;

  modalRef: BsModalRef;

  mergeFieldTypes: Array<Object> = [
    { id: "1", type: "String" },
    { id: "2", type: "Number" },
    { id: "3", type: "Boolean" },
    { id: "4", type: "Date" }
  ];

  mergeField: fromModels.MergeField = {
    name: "MergeField",
    type: fromModels.MergeFieldTypes.String
  };

  constructor(
    private store: Store<MergeFieldAppState>,
    private modalService: BsModalService
  ) {}

  ngOnInit() {
    this.loading$ = this.store.select(
      state => state.mergeField.loadApiState.busy
    );
    this.list$ = this.store.select(state => state.mergeField.list);
    this.loadingError$ = this.store.select(state => state.mergeField.loadApiState.error)
    .pipe(
      map(err => err && err.message)
    );
    this.loadMergeFields();

    console.log(this.mergeFieldTypes);
  }

  openModal(template: TemplateRef<any>, mergeField: fromModels.MergeField) {
    this.store.dispatch(
      fromActions.setMergeFieldAction({ payload: mergeField })
    );

    this.store
      .select(state => state.mergeField.selected)
      .subscribe(mergField => {
        this.selected = Object.assign(new fromModels.MergeField(), mergField);
      });
    this.modalRef = this.modalService.show(template);
    console.log(this.selected);
  }

  loadMergeFields() {
    this.store.dispatch(
      fromActions.setMergeFieldAction({ payload: this.mergeField })
    );
    this.store.dispatch(loadMergeFieldsAction());
  }

  onCreate(f: NgForm) {
    this.store.dispatch(
      fromActions.createMergeFieldBusyAction({ payload: true })
    );
    console.log(f.value);

    this.store.dispatch(
      fromActions.createMergeFieldAction({ payload: f.value })
    );

    // Create effect for this
    this.store.dispatch(
      fromActions.createMergeFieldErrorAction({ payload: new Error() })
    );
    this.store.dispatch(
      fromActions.createMergeFieldBusyAction({ payload: false })
    );

    this.modalRef.hide();
  }

  onUpdate(f: NgForm) {
    console.log(f.value);

    this.store.dispatch(
      fromActions.updateMergeFieldBusyAction({ payload: true })
    );

    this.store.dispatch(
      fromActions.updateMergeFieldAction({ payload: f.value })
    );

    this.store.dispatch(
      fromActions.updateMergeFieldErrorAction({ payload: new Error() })
    );

    this.store.dispatch(
      fromActions.updateMergeFieldBusyAction({ payload: false })
    );
    this.modalRef.hide();
  }

  deleteMergeFields() {
    this.store.dispatch(
      fromActions.deleteMergeFieldBusyAction({ payload: true })
    );
    this.store.dispatch(
      fromActions.deleteMergeFieldErrorAction({ payload: new Error() })
    );
    this.store.dispatch(
      fromActions.deleteMergeFieldBusyAction({ payload: false })
    );
  }
}
