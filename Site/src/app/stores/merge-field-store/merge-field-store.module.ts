import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule, ActionReducerMap } from "@ngrx/store";
import * as fromMergeField from "./merge-field.reducer";
import { MergeFieldAppState, reducers } from ".";
import { EffectsModule } from "@ngrx/effects";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromMergeField.mergeFieldFeatureKey, reducers)
  ]
})
export class MergeFieldStoreModule {}
