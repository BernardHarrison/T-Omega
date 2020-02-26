import { Component, OnInit, TemplateRef } from "@angular/core";
import { AlertService } from "ngx-alerts";
import { BsModalService, BsModalRef } from "ngx-bootstrap";
import {
  ModelDefinition,
  ModelBuilderAppState
} from "src/app/stores/model-builder-store";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import * as fromActions from "src/app/stores/model-builder-store/model-builder.actions";

@Component({
  selector: "app-model-builder-list",
  templateUrl: "./model-builder-list.component.html",
  styleUrls: ["./model-builder-list.component.scss"]
})
export class ModelBuilderListComponent implements OnInit {
  list$: Observable<ModelDefinition[]>;
  busy$: Observable<boolean>;

  updateModelDefinition: ModelDefinition = new ModelDefinition();
  createModelDefinition: ModelDefinition = new ModelDefinition();

  modalRef: BsModalRef;
  types: any;

  constructor(
    private store: Store<ModelBuilderAppState>,
    private modalService: BsModalService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.store.dispatch(
      fromActions.modelBuilderApiBusyAction({ payload: true })
    );
    this.store.dispatch(fromActions.loadModelFieldsAction());
    this.list$ = this.store.select(state => state.modelBuilderState.list);
    this.busy$ = this.store.select(state => state.modelBuilderState.busy);
  }

  onCreate() {
    this.alertService.success("Creating Model");
    this.store.dispatch(
      fromActions.modelBuilderApiBusyAction({ payload: true })
    );
    this.store.dispatch(
      fromActions.createModelBuilderAction({
        payload: this.createModelDefinition
      })
    );
    this.createModelDefinition = new ModelDefinition();
    this.modalRef.hide();
  }

  openModal(template: TemplateRef<any>, model: ModelDefinition) {
    this.updateModelDefinition = model;
    this.modalRef = this.modalService.show(template);
  }

  onUpdate() {
    this.alertService.warning("Updating Model");
    this.store.dispatch(
      fromActions.modelBuilderApiBusyAction({ payload: true })
    );
    this.store.dispatch(
      fromActions.updateModelBuilderAction({
        payload: this.updateModelDefinition
      })
    );
    this.modalRef.hide();
  }

  onDelete(m: ModelDefinition) {
    this.alertService.danger("Deleting Model");
    this.store.dispatch(
      fromActions.modelBuilderApiBusyAction({ payload: true })
    );
    this.store.dispatch(fromActions.deleteModelBuilderAction({ payload: m }));
  }
}
