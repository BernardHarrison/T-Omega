import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { desingerStoreKey } from '.';
import { designerReducerMap } from './designer-store.reducers';
import { EffectsModule } from '@ngrx/effects';
import { DesingerStoreEffects } from './designer-store.effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(desingerStoreKey, designerReducerMap),
    EffectsModule.forFeature([DesingerStoreEffects])
  ]
})
export class DesignerStoreModule { }
