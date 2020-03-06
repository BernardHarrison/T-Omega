import { Component, OnInit } from "@angular/core";
import { MergeObject } from "src/app/stores/merge-object-store";
import { Store } from "@ngrx/store";
import { Observable, forkJoin, merge } from "rxjs";
import { MergeField } from "src/app/stores/merge-field-store";
import { AppState } from "src/app/app.state";
import { addMergeToFieldsAction } from "src/app/stores/merge-object-store/merge-object.actions";
import { take, tap } from "rxjs/operators";

const DEFAULT_PLACEHOLDER = "DEFAULT_PLACEHOLDER";

@Component({
  selector: "app-merge-object-edit",
  templateUrl: "./merge-object-edit.component.html",
  styleUrls: ["./merge-object-edit.component.scss"]
})
export class MergeObjectEditComponent implements OnInit {
  selectedMergeObject$: Observable<MergeObject>;

  mergeFields: MergeField[]; //List of all fields in the database
  mergeObjectFields: MergeField[]; // List of all fields in this object

  selectedField: any; //Needed to capture the users selcted mergeField

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.selectedMergeObject$ = this.store.select(
      state => state.mergeObjectState.item
    );

    this.selectedMergeObject$.subscribe(
      item => (this.mergeObjectFields = item.fields)
    );

    this.store
      .select(state => state.mergeField.list)
      .pipe(take(1))
      .subscribe(x => (this.mergeFields = x));
  }

  get defaultPlaceholder() {
    return DEFAULT_PLACEHOLDER;
  }

  get availableMergeFields(): MergeField[] {
    return this.mergeFields.filter(x =>
      this.mergeObjectFields.find(y => y.id == x.id) ? false : true
    );
  }

  addMergeField(field: MergeField, model: MergeObject) {
    this.store.dispatch(addMergeToFieldsAction({ field, model }));
    this.selectedField = DEFAULT_PLACEHOLDER;
  }
}
