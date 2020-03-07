import { Component, OnInit, TemplateRef } from "@angular/core";
import { Router } from "@angular/router";

import { Observable } from "rxjs";

import { BsModalRef, BsModalService } from "ngx-bootstrap";
import { Store } from "@ngrx/store";
import { AlertService } from "ngx-alerts";

import * as fromActions from "src/app/stores/merge-object-store/merge-object.actions";
import {
  MergeObject
} from "src/app/stores/merge-object-store";
import { AppState } from "src/app/app.state";

@Component({
  selector: "app-merge-object-list",
  templateUrl: "./merge-object-list.component.html",
  styleUrls: ["./merge-object-list.component.scss"]
})
export class MergeObjectListComponent implements OnInit {
  list$: Observable<MergeObject[]>;
  busy$: Observable<boolean>;

  updateMergeObject: MergeObject = new MergeObject();
  createMergeObject: MergeObject = new MergeObject();

  modalRef: BsModalRef;
  types: any;

  constructor(
    private store: Store<AppState>,
    private modalService: BsModalService,
    private alertService: AlertService,
    private router: Router
  ) { }

  ngOnInit() {
    this.store.dispatch(fromActions.loadMergeObjectsAction());
    this.list$ = this.store.select(state => state.mergeObjectState.list);
    this.busy$ = this.store.select(state => state.mergeObjectState.busy);
  }

  onSelectItem(item: MergeObject) {
    this.store.dispatch(fromActions.setMergeObjectAction({ payload: item }));
    this.router.navigate(["/merge-object-edit"]);
  }

  onCreate() {
    this.alertService.success("Creating New Model");
    this.store.dispatch(
      fromActions.createMergeObjectAction({
        payload: this.createMergeObject
      })
    );
    this.createMergeObject = new MergeObject();
    this.modalRef.hide();
  }

  openModal(template: TemplateRef<any>, mergeObject: MergeObject) {
    this.updateMergeObject = mergeObject;
    this.modalRef = this.modalService.show(template);
  }

  onUpdate() {
    this.alertService.warning("Updating Merge Field");
    this.store.dispatch(
      fromActions.updateMergeObjectAction({ payload: this.updateMergeObject })
    );
    this.modalRef.hide();
  }

  onDelete(m: MergeObject) {
    this.alertService.danger("Deleting Merge Field");
    this.store.dispatch(fromActions.deleteMergeObjectAction({ payload: m }));
  }
}
