import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { desingerStoreKey } from '.';
import { designerReducerMap } from './designer-store.reducers';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(desingerStoreKey, designerReducerMap)
  ]
})
export class DesignerStoreModule { }
