import {
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
  ElementRef
} from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import {
  MergeFieldTypes,
  MergeFieldAppState
} from "src/app/stores/merge-field-store";
import { BsModalRef, BsModalService, ModalDirective } from "ngx-bootstrap";

@Component({
  selector: "app-create-merge-field",
  templateUrl: "./create-merge-field.component.html",
  styleUrls: ["./create-merge-field.component.scss"]
})
export class CreateMergeFieldComponent implements OnInit {
  loading$: Observable<boolean>;
  name: string;
  mergeFieldTypes = MergeFieldTypes;
  mergeFieldKeys: string[];
  type: MergeFieldTypes;

  constructor(private store: Store<MergeFieldAppState>) {}

  ngOnInit() {
    //this.loading$ = this.store.select(state => state.create.busy);
  }
}
