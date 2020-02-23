import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import * as fromMergeField from ".";
import { EffectsModule } from "@ngrx/effects";
import { MergeFieldEffects } from "./merge-field.effects";
import { reducer } from "./merge-field.reducer";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromMergeField.mergeFieldFeatureKey, reducer),
    EffectsModule.forFeature([MergeFieldEffects])
  ]
})
export class MergeFieldStoreModule {}
