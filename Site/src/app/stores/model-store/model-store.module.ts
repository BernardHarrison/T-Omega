import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import * as fromModelState from "./";
import { EffectsModule } from "@ngrx/effects";

import { ModelEffects } from "./model.effects";
import { reducer } from "./model.reducer";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromModelState.MODEL_KEY, reducer),
    EffectsModule.forFeature([ModelEffects])
  ]
})
export class ModelStoreModule {}
