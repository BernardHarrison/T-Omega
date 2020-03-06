import { Component, OnInit } from "@angular/core";
import { MergeObject } from "src/app/stores/merge-object-store";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { MergeField } from "src/app/stores/merge-field-store";
import { AppState } from "src/app/app.state";
import { addMergeToFieldsAction, removeMergeFromFieldsAction } from "src/app/stores/merge-object-store/merge-object.actions";
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

  mergeObjects: MergeObject[]; //List of all merge objects in the database
  mergeObjectObjects: MergeObject[];//List of all merge objects in this merge object

  selectedField: any = DEFAULT_PLACEHOLDER; //Needed to capture the users selcted mergeField

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.selectedMergeObject$ = this.store.select(
      state => state.mergeObjectState.item
    );

    this.selectedMergeObject$.subscribe(
      item => {
        this.mergeObjectFields = item ? item.fields : [];
        this.mergeObjectObjects = item ? item.objects : [];
      }
    );

    this.store
      .select(state => state.mergeField.list)
      .pipe(take(1))
      .subscribe(x => (this.mergeFields = x));

    this.store.select(x => x.mergeObjectState.list).pipe(take(1)).subscribe(x => this.mergeObjects = x);
  }

  get defaultPlaceholder() {
    return DEFAULT_PLACEHOLDER;
  }

  get availableMergeFields(): MergeField[] {
    return this.mergeFields.filter(x =>
      this.mergeObjectFields.find(y => y.id == x.id) ? false : true
    );
  }

  get availableMergeObjects(): MergeObject[] {
    return this.mergeObjects.filter(x =>
      this.mergeObjectObjects.find(y => y.id == x.id) ? false : true
    );
  }

  addMergeField(field: MergeField, model: MergeObject) {
    this.store.dispatch(addMergeToFieldsAction({ field, model }));
    this.selectedField = DEFAULT_PLACEHOLDER;
  }

  removeMergeField(field: MergeField, model: MergeObject) {
    this.store.dispatch(removeMergeFromFieldsAction({ field, model }));
    this.selectedField = DEFAULT_PLACEHOLDER;
  }
}
