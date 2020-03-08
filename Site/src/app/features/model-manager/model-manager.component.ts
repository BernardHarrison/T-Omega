import { Component, OnInit, TemplateRef } from "@angular/core";
import { MergeObject } from "src/app/stores/merge-object-store";
import { BsModalService, BsModalRef } from "ngx-bootstrap";
import { AlertService } from "ngx-alerts";
import { AppState } from "src/app/app.state";
import { Store } from "@ngrx/store";
import * as fromMergeObjectActions from "src/app/stores/merge-object-store/merge-object.actions";
import { Observable } from "rxjs";

@Component({
  selector: "app-model-manager",
  templateUrl: "./model-manager.component.html",
  styleUrls: ["./model-manager.component.scss"]
})
export class ModelManagerComponent implements OnInit {
  list$: Observable<MergeObject[]>;
  modalRef: BsModalRef;
  createMergeObject: MergeObject = new MergeObject();
  currentModel: MergeObject;

  constructor(
    private store: Store<AppState>,
    private modalService: BsModalService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.store.dispatch(fromMergeObjectActions.loadMergeObjectsAction());
    this.list$ = this.store.select(state => state.mergeObjectState.list);
  }

  openModal(template: TemplateRef<any>, mergeObject: MergeObject) {
    this.modalRef = this.modalService.show(template);
  }

  onCreate() {
    this.alertService.success("Creating New Model");
    this.store.dispatch(
      fromMergeObjectActions.createMergeObjectAction({
        payload: this.createMergeObject
      })
    );
    this.currentModel = this.createMergeObject;
    this.createMergeObject = new MergeObject();
    this.modalRef.hide();
  }

  deleteObject() {}

  selectModel(mergeObject: MergeObject) {}
}
