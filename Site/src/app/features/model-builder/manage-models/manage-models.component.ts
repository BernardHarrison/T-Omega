import { Component, OnInit, TemplateRef } from "@angular/core";
import { Observable, merge, concat, asyncScheduler } from "rxjs";
import {
  ModelDefinition,
  ModelBuilderAppState,
  ModelBuilderActions
} from "src/app/stores/model-builder-store/model-builder-store.module";
import { Store } from "@ngrx/store";
import { map } from "rxjs/operators";
import { BsModalRef, BsModalService } from "ngx-bootstrap";
import {
  MergeFieldAppState,
  MergeField
} from "src/app/stores/merge-field-api-store/merge-field-api-store.module";

@Component({
  selector: "app-manage-models",
  templateUrl: "./manage-models.component.html",
  styleUrls: ["./manage-models.component.scss"]
})
export class ManageModelsComponent implements OnInit {
  list$: Observable<ModelDefinition[]>;

  loadBusy$: Observable<boolean>;
  createBusy$: Observable<boolean>;

  errorMessage$: Observable<string>;

  creating: ModelDefinition = new ModelDefinition();
  updating: ModelDefinition = new ModelDefinition();
  modalRef: BsModalRef;

  mergeFields$: Observable<MergeField[]>;

  constructor(
    private store: Store<ModelBuilderAppState>,
    private mergeFieldStore: Store<MergeFieldAppState>,
    private actions: ModelBuilderActions,
    private modalService: BsModalService
  ) {}

  ngOnInit() {
    this.store.dispatch(this.actions.load());
    this.list$ = this.store.select(state => state.modelBuilderState.list);
    this.reloadMergeField();
  }

  reloadMergeField() {
    this.mergeFieldStore.dispatch(this.actions.load());
    this.mergeFields$ = this.mergeFieldStore.select(
      state => state.mergeFieldState.list
    );
  }

  selectMergeField(item: MergeField, model: ModelDefinition) {
    model.fields.push(item);
    this.store.dispatch(this.actions.update(model));
  }

  openModal(template: TemplateRef<any>, modelDefinition: ModelDefinition) {
    this.updating = modelDefinition;
    this.modalRef = this.modalService.show(template);
  }

  onCreate() {
    this.creating.fields = [];
    this.store.dispatch(this.actions.create(this.creating));
    this.creating = new ModelDefinition();
    this.reloadMergeField();
    this.modalRef.hide();
  }

  onUpdate() {
    this.store.dispatch(this.actions.update(this.updating));
    this.modalRef.hide();
  }

  onDelete(m: ModelDefinition) {
    this.store.dispatch(this.actions.delete(m));
  }
}
