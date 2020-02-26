import { Component, OnInit } from "@angular/core";
import {
  MergeObjectAppState,
  MergeObject
} from "src/app/stores/merge-object-store";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import {
  MergeFieldAppState,
  MergeField
} from "src/app/stores/merge-field-store";

@Component({
  selector: "app-merge-object-edit",
  templateUrl: "./merge-object-edit.component.html",
  styleUrls: ["./merge-object-edit.component.scss"]
})
export class MergeObjectEditComponent implements OnInit {
  selectedItem$: Observable<MergeObject>;
  mergeFieldList$: Observable<MergeField[]>;

  constructor(
    private store: Store<MergeObjectAppState>,
    private storeMergeFields: Store<MergeFieldAppState>
  ) {}

  ngOnInit() {
    this.selectedItem$ = this.store.select(
      state => state.mergeObjectState.item
    );
    this.mergeFieldList$ = this.storeMergeFields.select(
      state => state.mergeField.list
    );
  }

  addMergeField(item: MergeField) {
    console.log(item);
  }
}
