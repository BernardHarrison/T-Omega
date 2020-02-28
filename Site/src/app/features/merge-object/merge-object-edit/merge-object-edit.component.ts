import { Component, OnInit } from "@angular/core";
import {
  MergeObjectAppState,
  MergeObject
} from "src/app/stores/merge-object-store";
import { Store } from "@ngrx/store";
import { Observable, forkJoin, merge } from "rxjs";
import { MergeField, MergeFieldState } from "src/app/stores/merge-field-store";
import { AppState } from "src/app/app.state";
import { map, take, filter, mergeMap } from "rxjs/operators";
import { addMergeToFieldsAction } from "src/app/stores/merge-object-store/merge-object.actions";

@Component({
  selector: "app-merge-object-edit",
  templateUrl: "./merge-object-edit.component.html",
  styleUrls: ["./merge-object-edit.component.scss"]
})
export class MergeObjectEditComponent implements OnInit {

  selectedMergeObject$: Observable<MergeObject>;
  selectedMergeFields$: Observable<MergeField>;
  mergeFields$: Observable<MergeField[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    //
    this.selectedMergeObject$ = this.store.select(
      state => state.mergeObjectState.item
    );
    this.mergeFields$ = this.store.select(x => x.mergeField.list);
  }

  addMergeField(item: MergeField, model: MergeObject) {
    this.store.dispatch(addMergeToFieldsAction({ field: item, model: model }));
    this.updateView();
  }

  updateView() {
    // this.allMergeField.forEach(mergeField => {
    //   // check with bern
    //   if (this.selectedItemObject) {
    //     this.selectedItemObject.forEach(selectedMergeField => {
    //       if (mergeField.id == selectedMergeField.id) {
    //         let index = this.allMergeField.indexOf(mergeField);
    //         this.allMergeField.splice(index, 1);
    //       }
    //     });
    //   }
    // });
  }
}
