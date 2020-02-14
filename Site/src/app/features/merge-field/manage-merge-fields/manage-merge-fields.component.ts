import { Component, OnInit, Inject } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";

import * as fromModels from "src/app/stores/merge-field-store";
import * as fromActions from "src/app/stores/merge-field-store/merge-field.actions";
import { MergeFieldAppState } from 'src/app/stores/merge-field-store';
import { loadMergeFieldsAction } from 'src/app/stores/merge-field-store/merge-field.actions';

@Component({
  selector: "app-manage-merge-fields",
  templateUrl: "./manage-merge-fields.component.html",
  styleUrls: ["./manage-merge-fields.component.scss"]
})
export class ManageMergeFieldsComponent implements OnInit {
  list$: Observable<fromModels.MergeField[]>;
  loading$: Observable<boolean>;
  mergeField: fromModels.MergeField = {
    name: "MergeField",
    type: fromModels.MergeFieldTypes.String
  };

  constructor(
    private store: Store<MergeFieldAppState>) {

  }

  ngOnInit() {
    this.loading$ = this.store.select(
      state => state.mergeField.loadApiState.busy
    );
    this.list$ = this.store.select(state => state.mergeField.list);
    this.loadMergeFields();

  }

  loadMergeFields() {
    this.store.dispatch(
      fromActions.setMergeField({ payload: this.mergeField })
    );
    this.store.dispatch(loadMergeFieldsAction())

  }

  createMergeFields() {
    this.store.dispatch(
      fromActions.createMergeFieldLoadBusy({ payload: true })
    );
    this.store.dispatch(
      fromActions.createMergeField({ payload: this.mergeField })
    );
    this.store.dispatch(
      fromActions.createMergeFieldLoadError({ payload: new Error() })
    );
    this.store.dispatch(
      fromActions.createMergeFieldLoadBusy({ payload: false })
    );
  }

  updateMergeFields() {
    this.store.dispatch(
      fromActions.updateMergeFieldLoadBusy({ payload: true })
    );
    this.store.dispatch(
      fromActions.updateMergeFieldLoadError({ payload: new Error() })
    );
    this.store.dispatch(
      fromActions.updateMergeFieldLoadBusy({ payload: false })
    );
  }

  deleteMergeFields() {
    this.store.dispatch(
      fromActions.deleteMergeFieldLoadBusy({ payload: true })
    );
    this.store.dispatch(
      fromActions.deleteMergeFieldLoadError({ payload: new Error() })
    );
    this.store.dispatch(
      fromActions.deleteMergeFieldLoadBusy({ payload: false })
    );
  }
}
