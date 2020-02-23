import { NgModule, Injectable, InjectionToken, Inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule, Action } from "@ngrx/store";
import {
  createApiEntityAdapter,
  CrudApiStateActions,
  CrudStateApiEffects,
  ApiEntityState,
  CrudStateApiInterface
} from "../api-entity";
import { EffectsModule, Actions, Effect } from "@ngrx/effects";
import { Observable } from "rxjs";
import { MergeField } from "../merge-field-store";

//1) Define a key for this store
const STORE_KEY = "modelBuilderState";

//2) Define the model for this store
export interface MergeObject {
  name: string;
  fields: Array<MergeField>;
}

export class ModelDefinition {
  id: number | null;
  name: string;
  fields: Array<MergeField>;
}

//3) Wrap the model with an app state. NOTE: The property name must
// be the same as the string used for the key in step #1 !!
export class ModelBuilderAppState {
  modelBuilderState: ApiEntityState<ModelDefinition>;
}

//4) Create the model using the key name created in step #1
// and the model created in step #2
let adaptor = createApiEntityAdapter<ModelDefinition>(STORE_KEY);

//5) Create an injection token for the api
export const MODEL_BUILDER_STORE_API = new InjectionToken<
  CrudStateApiInterface<ModelDefinition>
>("MODEL_BUILDER_STORE_API");

//6) Create the effects class that extends the base effect class
@Injectable()
class StoreEffects extends CrudStateApiEffects<ModelDefinition> {
  constructor(
    @Inject(MODEL_BUILDER_STORE_API)
    api: CrudStateApiInterface<ModelDefinition>,
    actions$: Actions
  ) {
    super(api, actions$, adaptor.actions);
  }

  @Effect() load$: Observable<Action>;
  @Effect() create$: Observable<Action>;
  @Effect() update$: Observable<Action>;
  @Effect() delete$: Observable<Action>;
}

//7) Create a service that can be injected to give access to actions.
export class ModelBuilderActions extends CrudApiStateActions<ModelDefinition> {}

@NgModule({
  declarations: [],
  providers: [{ provide: ModelBuilderActions, useValue: adaptor.actions }],
  imports: [
    CommonModule,
    StoreModule.forFeature(STORE_KEY, adaptor.reducers),
    EffectsModule.forFeature([StoreEffects])
  ]
})
export class ModelBuilderStoreModule {}
