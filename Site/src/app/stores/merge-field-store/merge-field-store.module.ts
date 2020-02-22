import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import * as fromMergeField from "./merge-field.reducer";
import { EffectsModule } from "@ngrx/effects";
import { MergeFieldEffects } from "./merge-field.effects";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromMergeField.mergeFieldFeatureKey,
      fromMergeField.reducer
    ),
    EffectsModule.forFeature([MergeFieldEffects])
  ]
})
export class MergeFieldStoreModule {}
