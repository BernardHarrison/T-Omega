import { Component, OnInit } from "@angular/core";
import { MergeObject } from "src/app/stores/merge-object-store";
import { Store } from "@ngrx/store";
import { Observable, forkJoin, merge } from "rxjs";
import { MergeField } from "src/app/stores/merge-field-store";
import { AppState } from "src/app/app.state";
import { addMergeToFieldsAction } from "src/app/stores/merge-object-store/merge-object.actions";
import { MergeModel } from "src/app/stores/model-store";

@Component({
  selector: "app-merge-object-edit",
  templateUrl: "./merge-object-edit.component.html",
  styleUrls: ["./merge-object-edit.component.scss"]
})
export class MergeObjectEditComponent implements OnInit {
  selectedMergeModel$: Observable<MergeModel>;
  mergeFields$: Observable<MergeField[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.selectedMergeModel$ = this.store.select(
      state => state.modelState.item
    );

    this.mergeFields$ = this.store.select(state => state.mergeField.list);
  }

  addMergeFieldToMergeObject(payload: {
    field: MergeField;
    model: MergeObject;
  }) {
    this.store.dispatch(addMergeToFieldsAction(payload));
  }
}
