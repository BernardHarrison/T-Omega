import { Component, OnInit, Input } from "@angular/core";
import { MergeField } from "src/app/stores/merge-field-store";

@Component({
  selector: "app-merge-field-component",
  templateUrl: "./merge-field-component.component.html",
  styleUrls: ["./merge-field-component.component.scss"]
})
export class MergeFieldComponentComponent implements OnInit {
  @Input()
  mergeField: MergeField;

  constructor() {}

  ngOnInit() {}
}
