import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ManageModelsComponent } from "./manage-models/manage-models.component";
import { FormsModule } from "@angular/forms";
import { ModelBuilderRoutingModule } from "./model-builder-routing.module";
import { ModelItemComponent } from "./model-item/model-item.component";
import { FieldItemComponent } from "./field-item/field-item.component";
import { BsDropdownModule } from "ngx-bootstrap";

@NgModule({
  declarations: [ManageModelsComponent, ModelItemComponent, FieldItemComponent],
  imports: [
    CommonModule,
    FormsModule,
    ModelBuilderRoutingModule,
    BsDropdownModule.forRoot()
  ],
  exports: [ManageModelsComponent]
})
export class ModelBuilderModule {}
