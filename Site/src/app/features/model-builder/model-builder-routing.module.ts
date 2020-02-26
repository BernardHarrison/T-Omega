import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ManageModelsComponent } from "./manage-models/manage-models.component";
import { ModelBuilderListComponent } from "./model-builder-list/model-builder-list.component";
import { ModelBuilderEditComponent } from "./model-builder-edit/model-builder-edit.component";

const modelBuilderRoutes: Routes = [
  { path: "model-builder", component: ManageModelsComponent },
  { path: "model-builder-list", component: ModelBuilderListComponent },
  { path: "model-builder-edit", component: ModelBuilderEditComponent }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(modelBuilderRoutes)],
  exports: [RouterModule]
})
export class ModelBuilderRoutingModule {}
