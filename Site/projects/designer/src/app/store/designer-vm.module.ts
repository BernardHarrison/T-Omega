import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { DesignerVmState } from '.';
import { widthReducer } from './designer-vm.reducers';
import { DesignerAppState } from 'src/app/stores/designer-store';

const DESIGNER_VM_STORE = "designerVm"

const reducer: ActionReducerMap<DesignerVmState> = {
  template: null,
  width: widthReducer
}

export class DesignerVmAppState extends DesignerAppState {
  designerVm: DesignerVmState
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(DESIGNER_VM_STORE, reducer),
  ]
})
export class DesignerVmModule { }
