import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { ManageMergeFieldsComponent } from "./manage-merge-fields/manage-merge-fields.component";
import { CreateMergeFieldComponent } from "./create-merge-field/create-merge-field.component";
import { MergeFieldStoreModule } from "src/app/stores/merge-field-store/merge-field-store.module";
import { MergeFieldRoutingModule } from "./merge-field-routing.module";
import { MaterialModule } from "src/app/shared/material/material.module";

@NgModule({
  declarations: [ManageMergeFieldsComponent, CreateMergeFieldComponent],
  providers: [],
  imports: [
    CommonModule,
    FormsModule,
    MergeFieldStoreModule,
    MergeFieldRoutingModule
  ],
  exports: [ManageMergeFieldsComponent]
})
export class MergeFieldModule {}
