import { Component, OnInit } from "@angular/core";
import { MergeObject } from "src/app/stores/merge-object-store";
import { Store } from "@ngrx/store";
import { Observable, forkJoin, merge } from "rxjs";
import { MergeField } from "src/app/stores/merge-field-store";
import { AppState } from "src/app/app.state";

@Component({
  selector: "app-merge-object-edit",
  templateUrl: "./merge-object-edit.component.html",
  styleUrls: ["./merge-object-edit.component.scss"]
})
export class MergeObjectEditComponent implements OnInit {
  selectedMergeObject$: Observable<MergeObject>;
  mergeFields$: Observable<MergeField[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.selectedMergeObject$ = this.store.select(
      state => state.mergeObjectState.item
    );

    this.mergeFields$ = this.store.select(state => state.mergeField.list);

    this.mergeFields$.subscribe(x => console.log(x));
    //null
    this.selectedMergeObject$.subscribe(x => console.log(x));
  }
}
