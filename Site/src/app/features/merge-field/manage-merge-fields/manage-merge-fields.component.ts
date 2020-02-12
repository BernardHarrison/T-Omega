import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";

import * as fromModels from "src/app/stores/merge-field-store/merge-field.models";
import * as fromActions from "src/app/stores/merge-field-store/merge-field.actions";
import * as fromSelectors from "src/app/stores/merge-field-store/merge-field.selectors";

@Component({
  selector: "app-manage-merge-fields",
  templateUrl: "./manage-merge-fields.component.html",
  styleUrls: ["./manage-merge-fields.component.scss"]
})
export class ManageMergeFieldsComponent implements OnInit {
  list$: Observable<fromModels.MergeField[]>;
  loading$: Observable<boolean>;

  constructor(private store: Store<fromModels.MergeFieldAppState>) {}

  ngOnInit() {
    this.startLoading();
    this.loading$ = this.store.pipe(select(fromSelectors.selectApiBusy));
    this.loadMergeFields();
  }

  startLoading() {
    this.store.dispatch(fromActions.LoadingMergeFields({ payload: true }));
  }

  stopLoading() {
    this.store.dispatch(fromActions.LoadingMergeFields({ payload: false }));
  }

  loadMergeFields() {
    this.store.dispatch(fromActions.LoadMergeFields());
    this.list$ = this.store.pipe(select(fromSelectors.selectAllMergeFields));
    this.stopLoading();
  }
  //To create a merge field normally you pass in the merge field
  createMergeField() {
    this.startLoading();
    const mergeField: fromModels.MergeField = {
      name: "Create",
      type: fromModels.MergeFieldTypes.String
    };
    this.store.dispatch(fromActions.CreateMergeField({ payload: mergeField }));
    this.stopLoading();
  }

  updateMergeField() {
    this.startLoading();
    const mergeField: fromModels.MergeField = {
      name: "Update",
      type: fromModels.MergeFieldTypes.String
    };
    this.store.dispatch(fromActions.UpdateMergeField({ payload: mergeField }));
    this.stopLoading();
  }

  deleteMergeField() {
    this.startLoading();
    const mergeField: fromModels.MergeField = {
      name: "Delete",
      type: fromModels.MergeFieldTypes.String
    };
    this.store.dispatch(fromActions.DeleteMergeField({ payload: mergeField }));
    this.stopLoading();
  }
}
