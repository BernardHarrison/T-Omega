import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { mergeFieldReducer, mergeFieldApiReducer } from './merge-field.reducer';
import { ManageMergeFieldsComponent } from './manage-merge-fields/manage-merge-fields.component';
import { MergeFieldEffects } from './merge-field.effects';
import { CreateMergeFieldComponent } from './create-merge-field/create-merge-field.component';
import { MergeFieldState } from '.';

const reducerMap: ActionReducerMap<MergeFieldState> = {
  list: mergeFieldReducer,
  loadingStatus: mergeFieldApiReducer,
}

@NgModule({
  declarations: [ManageMergeFieldsComponent, CreateMergeFieldComponent],
  providers: [

  ],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature("mergeField", reducerMap),
    EffectsModule.forFeature([MergeFieldEffects])
  ],
  exports: [ManageMergeFieldsComponent]
})
export class MergeFieldModule { }
