import { Component, OnInit } from "@angular/core";
import { MergeObject } from "src/app/stores/merge-object-store";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState } from "src/app/app.state";


@Component({
  selector: "app-merge-object-edit",
  templateUrl: "./merge-object-edit.component.html",
  styleUrls: ["./merge-object-edit.component.scss"]
})
export class MergeObjectEditComponent implements OnInit {
  selectedMergeObject$: Observable<MergeObject>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.selectedMergeObject$ = this.store.select(
      state => state.mergeObjectState.item
    );

  }
}
