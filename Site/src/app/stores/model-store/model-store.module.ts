import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import * as fromModelState from "./";
import { EffectsModule } from "@ngrx/effects";
import { reducer } from "../merge-field-store/merge-field.reducer";
import { ModelEffects } from "./model.effects";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromModelState.MODEL_KEY, reducer),
    EffectsModule.forFeature([ModelEffects])
  ]
})
export class MergeObjectStoreModule {}
