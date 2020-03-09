import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ModelManagerRoutingModule } from "./model-manager-routing.module";
import { ModelManagerComponent } from "./model-manager.component";
import { FormsModule } from "@angular/forms";
import { BsDropdownModule } from "ngx-bootstrap";
import { MergeObjectItemComponent } from "./merge-object-item/merge-object-item.component";

@NgModule({
  declarations: [ModelManagerComponent, MergeObjectItemComponent],
  imports: [
    CommonModule,
    ModelManagerRoutingModule,
    FormsModule,
    BsDropdownModule.forRoot()
  ],
  exports: [ModelManagerComponent]
})
export class ModelManagerModule {}
