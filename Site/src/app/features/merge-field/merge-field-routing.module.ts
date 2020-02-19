import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ManageMergeFieldsComponent } from "./manage-merge-fields/manage-merge-fields.component";

const mergeFieldRoutes: Routes = [
  { path: "manage-merge-fields", component: ManageMergeFieldsComponent }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(mergeFieldRoutes)],
  exports: [RouterModule]
})
export class MergeFieldRoutingModule { }
