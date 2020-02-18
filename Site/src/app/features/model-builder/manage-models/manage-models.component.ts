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

  creating: ModelDefinition; //The item being created
  updating: ModelDefinition; //The item being updated

  modalRef: BsModalRef;

  constructor(
    private store: Store<ModelBuilderAppState>,
    private actions: ModelBuilderActions,
    private modalService: BsModalService
  ) {}

  ngOnInit() {}

  openModal(template: TemplateRef<any>, modelDefinition: ModelDefinition) {
    this.updating = modelDefinition;
    this.modalRef = this.modalService.show(template);
  }

  onCreate() {
    this.store.dispatch(this.actions.create(this.creating));
    this.creating = new ModelDefinition();
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
