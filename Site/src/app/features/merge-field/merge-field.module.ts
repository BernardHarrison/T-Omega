import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { ManageMergeFieldsComponent } from "./manage-merge-fields/manage-merge-fields.component";
import { CreateMergeFieldComponent } from "./create-merge-field/create-merge-field.component";
import { MergeFieldStoreModule } from "src/app/stores/merge-field-store/merge-field-store.module";
import { MergeFieldRoutingModule } from "./merge-field-routing.module";

import { MAILING_ACTIVITY_API } from "src/app/stores/merge-field-store";
import { MergeFieldApiService } from "src/app/apis/merge-field-api.service";

@NgModule({
  declarations: [ManageMergeFieldsComponent, CreateMergeFieldComponent],
  providers: [
    { provide: MAILING_ACTIVITY_API, useClass: MergeFieldApiService }
  ],
  imports: [
    CommonModule,
    FormsModule,
    MergeFieldStoreModule,
    MergeFieldRoutingModule
  ],
  exports: [ManageMergeFieldsComponent]
})
export class MergeFieldModule {}
