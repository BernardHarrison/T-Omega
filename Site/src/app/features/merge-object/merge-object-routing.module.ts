import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MergeObjectListComponent } from "./merge-object-list/merge-object-list.component";
import { MergeObjectEditComponent } from "./merge-object-edit/merge-object-edit.component";

const routes: Routes = [
  { path: "merge-objects", component: MergeObjectListComponent },
  { path: "merge-object-edit", component: MergeObjectEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MergeObjectRoutingModule {}
