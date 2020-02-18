import { NgModule, InjectionToken, Injectable, Inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  ApiEntityState,
  createApiEntityAdapter,
  CrudStateApiInterface,
  CrudStateApiEffects,
  CrudApiStateActions
} from "../api-entity";
import { Actions, Effect, EffectsModule } from "@ngrx/effects";
import { Observable } from "rxjs";
import { Action, StoreModule } from "@ngrx/store";

//1) Define a key for this store
const STORE_KEY = "mergeFieldState";

//2) Define the model for this store
export enum MergeFieldTypes {
  String,
  Number,
  Boolean,
  Date
}

// export class MergeField {
//   id: number | null;
//   name: string;
//   type: MergeFieldTypes;
// }

export class MergeField {
  id: number | null;
  name: string;
  type: string;
}

//3) Wrap the model with an app state. NOTE: The property name must
// be the same as the string used for the key in step #1 !!
export class MergeFieldAppState {
  mergeFieldState: ApiEntityState<MergeField>;
}

//4) Create the model using the key name created in step #1
// and the model created in step #2
let adaptor = createApiEntityAdapter<MergeField>(STORE_KEY);

//5) Create an injection token for the api
export const MERGE_FIELD_STORE_API_TOKEN = new InjectionToken<
  CrudStateApiInterface<MergeField>
>("MERGE_FIELD_STORE_API_TOKEN");

//6) Create the effects class that extends the base effect class
@Injectable()
export class StoreEffects extends CrudStateApiEffects<MergeField> {
  constructor(
    @Inject(MERGE_FIELD_STORE_API_TOKEN)
    api: CrudStateApiInterface<MergeField>,
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
export class MergeFieldActions extends CrudApiStateActions<MergeField> {}

@NgModule({
  declarations: [],
  providers: [{ provide: MergeFieldActions, useValue: adaptor.actions }],
  imports: [
    CommonModule,
    StoreModule.forFeature(STORE_KEY, adaptor.reducers),
    EffectsModule.forFeature([StoreEffects])
  ]
})
export class MergeFieldApiStoreModule {}
