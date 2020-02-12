import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "./app.state";
import { Observable } from "rxjs";
import { MergeField } from "./stores/merge-field-store/merge-field.models";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  list$: Observable<MergeField[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}
}
