import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { createApiEntityAdapter, CrudApiStateActions } from '../api-entity';
import { ModelDefinition } from '.';

const MODEL_BUILDER_FEATURE_KEY = "modelBuilderState";
let modelBuilderStoreAdaptor = createApiEntityAdapter<ModelDefinition>(MODEL_BUILDER_FEATURE_KEY);

export class ModelBuilderActions extends  CrudApiStateActions<ModelDefinition>{ }

@NgModule({
  declarations: [],
  providers: [{ provide: ModelBuilderActions, useValue: modelBuilderStoreAdaptor.actions }],
  imports: [
    CommonModule,
    StoreModule.forFeature(
      MODEL_BUILDER_FEATURE_KEY,
      modelBuilderStoreAdaptor.reducers
    )
  ]
})
export class ModelBuilderStoreModule {}
