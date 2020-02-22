import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { ManageMergeFieldsComponent } from "./manage-merge-fields/manage-merge-fields.component";
import { MergeFieldRoutingModule } from "./merge-field-routing.module";
import { MergeFieldStoreModule } from "src/app/stores/merge-field-store/merge-field-store.module";

@NgModule({
  declarations: [ManageMergeFieldsComponent],
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
