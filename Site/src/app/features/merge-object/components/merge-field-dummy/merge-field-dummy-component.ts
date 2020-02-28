import { Component, OnInit, Input } from "@angular/core";
import { MergeField } from "src/app/stores/merge-field-store";

@Component({
  selector: "app-merge-field-dummy-component",
  templateUrl: "./merge-field-dummy.component.html",
  styleUrls: ["./merge-field-dummy.component.scss"]
})
export class MergeFieldDummyComponent implements OnInit {
  @Input()
  mergeField: MergeField;

  constructor() {}

  ngOnInit() {}
}
