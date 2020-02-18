import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ManageModelsComponent } from "./manage-models/manage-models.component";
import { FormsModule } from "@angular/forms";
import { ModelBuilderRoutingModule } from "./model-builder-routing.module";

@NgModule({
  declarations: [ManageModelsComponent],
  imports: [CommonModule, FormsModule, ModelBuilderRoutingModule],
  exports: [ManageModelsComponent]
})
export class ModelBuilderModule {}
