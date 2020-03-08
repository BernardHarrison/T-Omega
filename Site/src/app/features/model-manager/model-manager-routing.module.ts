import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ModelManagerComponent } from "./model-manager.component";

const routes: Routes = [
  { path: "model-manager", component: ModelManagerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModelManagerRoutingModule {}
