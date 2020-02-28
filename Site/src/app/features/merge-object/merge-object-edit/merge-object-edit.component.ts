import { Component, OnInit } from "@angular/core";
import {
  MergeObjectAppState,
  MergeObject
} from "src/app/stores/merge-object-store";
import { Store } from "@ngrx/store";
import { Observable, forkJoin, merge } from "rxjs";
import { MergeField, MergeFieldState } from "src/app/stores/merge-field-store";
import { AppState } from "src/app/app.state";
import { map } from "rxjs/operators";
import * as fromFeatureActions from "../store/merge-object-feature.actions";
import * as fromActions from "../../../stores/merge-object-store/merge-object.actions";

@Component({
  selector: "app-merge-object-edit",
  templateUrl: "./merge-object-edit.component.html",
  styleUrls: ["./merge-object-edit.component.scss"]
})
export class MergeObjectEditComponent implements OnInit {
  listMergeObjects: MergeObject[];
  selectedMergeObject$: Observable<MergeObject>;
  selectedMergeFields: MergeField[];
  allMergeFeilds: MergeField[];

  notSelectedMergeFields$: Observable<MergeField[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.selectedMergeObject$ = this.store.select(
      state => state.mergeObjectFeature.selectedMergeObject
    );

    this.refresh();
  }

  addMergeField(item: MergeField, selectObject: MergeObject) {
    this.store.dispatch(
      fromActions.addMergeToFieldsAction({
        field: item,
        model: selectObject
      })
    );

    this.store
      .select(state => state.mergeObjectState.list)
      .subscribe(list => (this.listMergeObjects = list));

    this.store.dispatch(
      fromFeatureActions.updateSelectedItem({
        mergeObjId: selectObject.id,
        listMergeObjects: this.listMergeObjects
      })
    );

    this.selectedMergeObject$ = this.store.select(
      state => state.mergeObjectFeature.selectedMergeObject
    );

    this.refresh();
  }

  removeMergeField(item: MergeField, selectedObject: MergeObject) {
    this.store.dispatch(
      fromActions.removeMergeFromFieldsAction({
        field: item,
        model: selectedObject
      })
    );
    //Todo Fix bug
    this.store
      .select(state => state.mergeObjectState.list)
      .subscribe(list => (this.listMergeObjects = list));

    this.store.dispatch(
      fromFeatureActions.updateSelectedItem({
        mergeObjId: selectedObject.id,
        listMergeObjects: this.listMergeObjects
      })
    );

    this.selectedMergeObject$ = this.store.select(
      state => state.mergeObjectFeature.selectedMergeObject
    );

    this.refresh();
  }

  refresh() {
    this.store
      .select(state => state.mergeField.list)
      .subscribe(list => (this.allMergeFeilds = list));

    this.selectedMergeObject$
      .pipe(map(mo => mo.fields))
      .subscribe(fields => (this.selectedMergeFields = fields));

    this.store.dispatch(
      fromFeatureActions.gettingNotSelectedMergeFields({
        selectedFields: this.selectedMergeFields,
        fieldOptions: this.allMergeFeilds
      })
    );

    this.notSelectedMergeFields$ = this.store.select(
      state => state.mergeObjectFeature.notSelectedMergeFields
    );
  }
}
