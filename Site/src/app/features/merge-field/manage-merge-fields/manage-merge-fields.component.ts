import {
  Component,
  OnInit,
  Inject,
  TemplateRef,
  ViewChild
} from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";

import * as fromModels from "src/app/stores/merge-field-store";
import * as fromActions from "src/app/stores/merge-field-store/merge-field.actions";
import { MergeFieldAppState } from "src/app/stores/merge-field-store";
import { loadMergeFieldsAction } from "src/app/stores/merge-field-store/merge-field.actions";
import { BsModalRef, BsModalService, ModalDirective } from "ngx-bootstrap";
import { map, pluck } from 'rxjs/operators';

@Component({
  selector: "app-manage-merge-fields",
  templateUrl: "./manage-merge-fields.component.html",
  styleUrls: ["./manage-merge-fields.component.scss"]
})
export class ManageMergeFieldsComponent implements OnInit {
  list$: Observable<fromModels.MergeField[]>;
  loading$: Observable<boolean>;
  loadingError$: Observable<string>;

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
  }

  modalRef: BsModalRef;

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  loadMergeFields() {
    this.store.dispatch(
      fromActions.setMergeFieldAction({ payload: this.mergeField })
    );
    this.store.dispatch(loadMergeFieldsAction());
  }

  createMergeFields() {
    this.store.dispatch(
      fromActions.createMergeFieldBusyAction({ payload: true })
    );
    this.store.dispatch(
      fromActions.createMergeFieldAction({ payload: this.mergeField })
    );
    this.store.dispatch(
      fromActions.createMergeFieldErrorAction({ payload: new Error() })
    );
    this.store.dispatch(
      fromActions.createMergeFieldBusyAction({ payload: false })
    );
  }

  updateMergeFields() {
    this.store.dispatch(
      fromActions.updateMergeFieldBusyAction({ payload: true })
    );
    this.store.dispatch(
      fromActions.updateMergeFieldErrorAction({ payload: new Error() })
    );
    this.store.dispatch(
      fromActions.updateMergeFieldBusyAction({ payload: false })
    );
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
