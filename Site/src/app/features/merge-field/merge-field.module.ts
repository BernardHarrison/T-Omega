import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { ManageMergeFieldsComponent } from "./manage-merge-fields/manage-merge-fields.component";
import { MergeFieldRoutingModule } from "./merge-field-routing.module";
import { MergeFieldApiStoreModule } from "src/app/stores/merge-field-api-store/merge-field-api-store.module";

@NgModule({
  declarations: [ManageMergeFieldsComponent],
  providers: [],
  imports: [
    CommonModule,
    FormsModule,
    MergeFieldApiStoreModule,
    MergeFieldRoutingModule
  ],
  exports: [ManageMergeFieldsComponent]
})
export class MergeFieldModule { }
