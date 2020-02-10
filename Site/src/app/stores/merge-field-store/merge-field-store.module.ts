import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromMergeField from './merge-field.reducer';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromMergeField.mergeFieldFeatureKey, fromMergeField.reducer)
  ]
})
export class MergeFieldStoreModule { }
