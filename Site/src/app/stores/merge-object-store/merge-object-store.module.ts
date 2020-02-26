import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import * as fromMergeObjectState from "./";
import { EffectsModule } from "@ngrx/effects";
import { MergeObjectEffects } from "./merge-object.effects";
import { reducer } from "./merge-object.reducer";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromMergeObjectState.MERGE_OBJECT_KEY, reducer),
    EffectsModule.forFeature([MergeObjectEffects])
  ]
})
export class MergeObjectStoreModule {}
