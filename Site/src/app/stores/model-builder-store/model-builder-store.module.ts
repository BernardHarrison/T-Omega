import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import * as fromModelBuilderState from "./";
import { reducer } from "./model-builder.reducer";
import { EffectsModule } from '@ngrx/effects';
import { ModelBuilderEffects } from './model-builder.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromModelBuilderState.MODEL_BUILDER_KEY, reducer),
    EffectsModule.forFeature([ModelBuilderEffects])
  ]
})
export class ModelBuilderStoreModule {}
