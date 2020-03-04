import { Component, OnInit, TemplateRef } from "@angular/core";
import { Router } from "@angular/router";

import { Observable } from "rxjs";

import { BsModalRef, BsModalService } from "ngx-bootstrap";
import { Store } from "@ngrx/store";
import { AlertService } from "ngx-alerts";

import * as fromActions from "src/app/stores/merge-object-store/merge-object.actions";
import {
  MergeObject,
  MergeObjectAppState
} from "src/app/stores/merge-object-store";
import * as fromModelActions from "src/app/stores/model-store/model.actions";
import { MergeModel } from "src/app/stores/model-store";
import { AppState } from "src/app/app.state";

@Component({
  selector: "app-merge-object-list",
  templateUrl: "./merge-object-list.component.html",
  styleUrls: ["./merge-object-list.component.scss"]
})
export class MergeObjectListComponent implements OnInit {
  list$: Observable<MergeModel[]>;
  busy$: Observable<boolean>;

  updateMergeModel: MergeModel = new MergeModel();
  createMergeModel: MergeModel = new MergeModel();

  modalRef: BsModalRef;
  types: any;

  constructor(
    private store: Store<AppState>,
    private modalService: BsModalService,
    private alertService: AlertService,
    private router: Router
  ) {}

  ngOnInit() {
    this.store.dispatch(fromModelActions.modelApiBusyAction({ payload: true }));
    this.store.dispatch(fromModelActions.loadModelsAction());
    this.list$ = this.store.select(state => state.modelState.list);
    this.busy$ = this.store.select(state => state.modelState.busy);
  }

  onSelectItem(item: MergeModel) {
    this.store.dispatch(fromModelActions.setModelAction({ payload: item }));
    this.router.navigate(["/merge-object-edit"]);
  }

  onCreate() {
    this.alertService.success("Creating New Model");
    this.store.dispatch(fromModelActions.modelApiBusyAction({ payload: true }));
    this.store.dispatch(
      fromModelActions.createModelAction({
        payload: this.createMergeModel
      })
    );
    this.createMergeModel = new MergeModel();
    this.modalRef.hide();
  }

  openModal(template: TemplateRef<any>, mergeModel: MergeModel) {
    this.updateMergeModel = mergeModel;
    this.modalRef = this.modalService.show(template);
  }

  onUpdate() {
    this.alertService.warning("Updating Merge Field");
    this.store.dispatch(fromModelActions.modelApiBusyAction({ payload: true }));
    this.store.dispatch(
      fromModelActions.updateModelAction({ payload: this.updateMergeModel })
    );
    this.modalRef.hide();
  }

  onDelete(m: MergeModel) {
    this.alertService.danger("Deleting Merge Field");
    this.store.dispatch(fromModelActions.modelApiBusyAction({ payload: true }));
    this.store.dispatch(fromModelActions.deleteModelAction({ payload: m }));
  }
}
