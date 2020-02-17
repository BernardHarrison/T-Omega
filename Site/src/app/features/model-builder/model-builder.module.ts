import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageModelsComponent } from './manage-models/manage-models.component';



@NgModule({
  declarations: [ManageModelsComponent],
  imports: [
    CommonModule
  ],
  exports:[ManageModelsComponent]
})
export class ModelBuilderModule { }
