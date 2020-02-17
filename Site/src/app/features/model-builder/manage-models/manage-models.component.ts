import { Component, OnInit } from '@angular/core';
import { Observable, merge, concat, asyncScheduler } from 'rxjs';
import { ModelDefinition, ModelBuilderAppState, ModelBuilderActions } from 'src/app/stores/model-builder-store/model-builder-store.module';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-manage-models',
  templateUrl: './manage-models.component.html',
  styleUrls: ['./manage-models.component.scss']
})
export class ManageModelsComponent implements OnInit {

  list$: Observable<ModelDefinition[]>;

  loadBusy$: Observable<boolean>;
  createBusy$: Observable<boolean>;

  errorMessage$: Observable<string>;

  creating: ModelDefinition; //The item being created
  updating: ModelDefinition; //The item being updated

  constructor(
    private store: Store<ModelBuilderAppState>,
    private actions: ModelBuilderActions
  ) { }

  ngOnInit() {
    this.list$ = this.store.select(state => state.modelBuilderState.list);

    this.loadBusy$ = this.store.select(state => state.modelBuilderState.loadApiState.busy);
    this.createBusy$ = this.store.select(state => state.modelBuilderState.createApiState.busy);

    this.errorMessage$ = merge(
      this.store.select(state => state.modelBuilderState.loadApiState.error),
      this.store.select(state => state.modelBuilderState.createApiState.error),
      this.store.select(state => state.modelBuilderState.updateApiState.error),
      this.store.select(state => state.modelBuilderState.deleteApiState.error),
    ).pipe(
      map(err => err && err.message)
    );

    this.store.dispatch(this.actions.load());
  }

  createStart(){
    this.creating = {
      id: null,
      field: []
    }
  }

  createCancel(){
    this.creating = null;
  }

  create(){
    this.store.dispatch(this.actions.create(this.creating));
    //TODO Now What? how do I know when its done creating
  }
}
