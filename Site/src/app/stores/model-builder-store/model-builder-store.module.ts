import { NgModule, Injectable, InjectionToken, Inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule, Action } from "@ngrx/store";
import { createApiEntityAdapter, CrudApiStateActions, CrudStateApiEffects, ApiEntityState, CrudStateApiInterface } from '../api-entity';
import { EffectsModule, Actions, Effect, ofType } from '@ngrx/effects';
import { MergeField } from '../merge-field-store';
import { Observable } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';
import { SUPER_EXPR } from '@angular/compiler/src/output/output_ast';

//1) Define a key for this store
const MODEL_BUILDER_STORE = "modelBuilderState";

//2) Define the model for this store
export enum ModelBuilderTypes {
  String,
  Number,
  Boolean,
  Date
}

export interface MergeObject {
  name: string;
  field: Array<MergeField>;
}

export interface ModelDefinition {
  id: number;
  field: Array<MergeField | MergeObject>;
}

//3) Wrap the model with an app state. NOTE: The property name must
// be the same as the string used for the key in step #1 !!
export class ModelBuilderAppState {
  modelBuilderState: ApiEntityState<ModelDefinition>;
}

//4) Create the model using the key name created in step #1
// and the model created in step #2
let modelBuilderStoreAdaptor = createApiEntityAdapter<ModelDefinition>(MODEL_BUILDER_STORE);

//5) Create an injection token for the api
export const MODEL_BUILDER_STORE_API = new InjectionToken<CrudStateApiInterface<ModelDefinition>>(
  "MODEL_BUILDER_STORE_API"
);

//6) Create the effects class that extends the base effect class
@Injectable()
export class ModelBuilderEffects extends CrudStateApiEffects<ModelDefinition>  {
  constructor(
    @Inject(MODEL_BUILDER_STORE_API) api: CrudStateApiInterface<ModelDefinition>,
    actions$: Actions
  ){
      super(api, actions$, modelBuilderStoreAdaptor.actions);
  }

  @Effect() load$: Observable<Action>;

}

//7) Create a service that can be injected to give access to actions.
export class ModelBuilderActions extends  CrudApiStateActions<ModelDefinition>{ }

@NgModule({
  declarations: [],
  providers: [{ provide: ModelBuilderActions, useValue: modelBuilderStoreAdaptor.actions }],
  imports: [
    CommonModule,
    StoreModule.forFeature(
      MODEL_BUILDER_STORE,
      modelBuilderStoreAdaptor.reducers
    ),
    EffectsModule.forFeature([ModelBuilderEffects])
  ]
})
export class ModelBuilderStoreModule {}
