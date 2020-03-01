import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { DESIGNER_VM_STORE } from '.';
import { designerVmReducerMap } from './designer-vm.reducers';
import { EffectsModule } from '@ngrx/effects';
import { DesignerVmEffects } from './designer-vm.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(DESIGNER_VM_STORE, designerVmReducerMap),
    EffectsModule.forFeature([DesignerVmEffects])
  ]
})
export class DesignerVmModule { }
