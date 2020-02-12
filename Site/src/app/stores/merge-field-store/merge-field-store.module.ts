import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule, ActionReducerMap } from "@ngrx/store";
import * as fromMergeField from "./merge-field.reducer";
import { MergeFieldAppState } from "./merge-field.models";
import { EffectsModule } from '@ngrx/effects';
import { MergeFieldEffects } from './merge-field.effects';

export const reducers: ActionReducerMap<MergeFieldAppState> = {
  merchFields: fromMergeField.mergeFieldsReducer,
  loadingStatus: fromMergeField.mergeFieldApiReducer,
  merchField: fromMergeField.mergeFieldReducer
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromMergeField.mergeFieldFeatureKey, reducers),
    EffectsModule.forFeature([MergeFieldEffects])
  ]
})
export class MergeFieldStoreModule {}
