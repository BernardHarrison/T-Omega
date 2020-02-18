import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ManageModelsComponent } from "./manage-models/manage-models.component";

const modelBuilderRoutes: Routes = [
  { path: "model-builder", component: ManageModelsComponent }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(modelBuilderRoutes)],
  exports: [RouterModule]
})
export class ModelBuilderRoutingModule {}
