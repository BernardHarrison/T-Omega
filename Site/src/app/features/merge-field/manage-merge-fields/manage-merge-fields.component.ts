import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";

import * as fromModels from "src/app/stores/merge-field-store";
import * as fromActions from "src/app/stores/merge-field-store/merge-field.actions";

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
    this.loading$ = this.store.pipe(
      select(state => state.mergeField.apiState.busy)
    );
    this.loadMergeFields();
  }

  startLoading() {
    this.store.dispatch(fromActions.loadingMergeFields({ payload: true }));
  }

  stopLoading() {
    this.store.dispatch(fromActions.loadingMergeFields({ payload: false }));
  }

  loadMergeFields() {
    const mergeField = <fromModels.MergeField>{
      name: "name",
      type: fromModels.MergeFieldTypes.String
    };
    this.store.dispatch(fromActions.SetMergeFields({ payload: [mergeField] }));
    this.list$ = this.store.pipe(
      select(state => state.mergeField.mergeFields.list)
    );
    this.stopLoading();
  }
}
