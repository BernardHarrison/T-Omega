import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageModelsComponent } from './manage-models/manage-models.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ManageModelsComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[ManageModelsComponent]
})
export class ModelBuilderModule { }
