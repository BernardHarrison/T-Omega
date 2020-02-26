import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ManageMergeFieldsComponent } from "./manage-merge-fields/manage-merge-fields.component";
import { MergeFieldListComponent } from "./merge-field-list/merge-field-list.component";

const mergeFieldRoutes: Routes = [
  { path: "manage-merge-fields", component: ManageMergeFieldsComponent },
  { path: "merge-fields", component: MergeFieldListComponent }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(mergeFieldRoutes)],
  exports: [RouterModule]
})
export class MergeFieldRoutingModule {}
