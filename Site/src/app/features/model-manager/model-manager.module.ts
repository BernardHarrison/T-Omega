import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ModelManagerRoutingModule } from "./model-manager-routing.module";
import { ModelManagerComponent } from "./model-manager.component";
import { FormsModule } from "@angular/forms";
import { BsDropdownModule } from "ngx-bootstrap";

@NgModule({
  declarations: [ModelManagerComponent],
  imports: [
    CommonModule,
    ModelManagerRoutingModule,
    FormsModule,
    BsDropdownModule.forRoot()
  ],
  exports: [ModelManagerComponent]
})
export class ModelManagerModule {}
