import { Component, OnInit, TemplateRef } from "@angular/core";
import { Observable, merge } from "rxjs";

import { Store } from "@ngrx/store";
import { map, tap } from "rxjs/operators";
import { BsModalRef, BsModalService } from "ngx-bootstrap";

import { AlertService } from "ngx-alerts";
import {
  MergeField,
  MergeFieldAppState
} from "src/app/stores/merge-field-store";
import {
  ModelDefinition,
  ModelBuilderAppState
} from "src/app/stores/model-builder-store";

import * as fromActions from "src/app/stores/model-builder-store/model-builder.actions";
import * as fromMergeFieldActions from "src/app/stores/merge-field-store/merge-field.actions";

@Component({
  selector: "app-manage-models",
  templateUrl: "./manage-models.component.html",
  styleUrls: ["./manage-models.component.scss"]
})
export class ManageModelsComponent implements OnInit {
  list$: Observable<ModelDefinition[]>;

  busy$: Observable<boolean>;

  creating: ModelDefinition = new ModelDefinition();
  updating: ModelDefinition = new ModelDefinition();
  modalRef: BsModalRef;

  mergeFields$: Observable<MergeField[]>;

  constructor(
    private store: Store<ModelBuilderAppState>,
    private mergeFieldStore: Store<MergeFieldAppState>,
    private modalService: BsModalService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.store.dispatch(
      fromActions.modelBuilderApiBusyAction({ payload: true })
    );
    this.store.dispatch(fromActions.loadModelFieldsAction());
    this.list$ = this.store.select(state => state.modelBuilderState.list);
    this.reloadMergeField();

    this.busy$ = this.store.select(state => state.modelBuilderState.busy);
  }

  reloadMergeField() {
    this.mergeFieldStore.dispatch(
      fromMergeFieldActions.loadMergeFieldsAction()
    );
    this.mergeFields$ = this.mergeFieldStore.select(
      state => state.mergeField.list
    );
  }

  selectMergeField(item: MergeField, model: ModelDefinition) {
    model.fields.push(item);
    this.store.dispatch(
      fromMergeFieldActions.createMergeFieldAction({ payload: item })
    );
  }

  openModal(template: TemplateRef<any>, modelDefinition: ModelDefinition) {
    this.updating = modelDefinition;
    this.modalRef = this.modalService.show(template);
  }

  onCreate() {
    this.alertService.success("Creating Model Field");
    this.store.dispatch(
      fromActions.modelBuilderApiBusyAction({ payload: true })
    );

    this.creating.fields = [];
    this.store.dispatch(
      fromActions.createModelBuilderAction({ payload: this.creating })
    );
    this.creating = new ModelDefinition();
    this.reloadMergeField();
    this.modalRef.hide();
  }

  onUpdate() {
    this.alertService.warning("Updating Model Field");
    this.store.dispatch(
      fromActions.modelBuilderApiBusyAction({ payload: true })
    );

    this.store.dispatch(
      fromActions.updateModelBuilderAction({ payload: this.updating })
    );
    this.modalRef.hide();
  }

  onDelete(m: ModelDefinition) {
    this.alertService.danger("Deleting Model Field");
    this.store.dispatch(
      fromActions.modelBuilderApiBusyAction({ payload: true })
    );

    this.store.dispatch(fromActions.deleteModelBuilderAction({ payload: m }));
  }
}
