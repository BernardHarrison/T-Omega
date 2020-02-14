import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule, ActionReducerMap } from "@ngrx/store";
import * as fromMergeField from "./merge-field.reducer";
import { MergeFieldAppState, reducers } from ".";
import { EffectsModule } from "@ngrx/effects";
import { MergeFieldEffects } from './merge-field.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromMergeField.mergeFieldFeatureKey, reducers),
    EffectsModule.forFeature([MergeFieldEffects])
  ]
})
export class MergeFieldStoreModule { }
