import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ManageModelsComponent } from "./manage-models/manage-models.component";
import { FormsModule } from "@angular/forms";
import { ModelBuilderRoutingModule } from "./model-builder-routing.module";
import { BsDropdownModule } from "ngx-bootstrap";
import { ModelBuilderListComponent } from "./model-builder-list/model-builder-list.component";
import { ModelBuilderEditComponent } from './model-builder-edit/model-builder-edit.component';

@NgModule({
  declarations: [ManageModelsComponent, ModelBuilderListComponent, ModelBuilderEditComponent],
  imports: [
    CommonModule,
    FormsModule,
    ModelBuilderRoutingModule,
    BsDropdownModule.forRoot()
  ],
  exports: [ManageModelsComponent]
})
export class ModelBuilderModule {}
