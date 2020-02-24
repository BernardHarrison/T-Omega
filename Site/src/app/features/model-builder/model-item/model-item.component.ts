import { Component, OnInit, Input } from "@angular/core";

import { MergeField } from "src/app/stores/merge-field-store";
import { MergeObject } from "src/app/stores/model-builder-store";

@Component({
  selector: "app-model-item",
  templateUrl: "./model-item.component.html",
  styleUrls: ["./model-item.component.scss"]
})
export class ModelItemComponent implements OnInit {
  @Input() fieldItems: Array<MergeField | MergeObject>;
  constructor() {}

  ngOnInit() {}
}
