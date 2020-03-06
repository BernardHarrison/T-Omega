import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { MergeObjectRoutingModule } from "./merge-object-routing.module";
import { MergeObjectListComponent } from "./merge-object-list/merge-object-list.component";
import { MergeObjectEditComponent } from "./merge-object-edit/merge-object-edit.component";

import { MergeObjectDummyComponent } from "./components/merge-object-dummy/merge-object-dummy.component";
import { MergeFieldDummyComponent } from "./components/merge-field-dummy/merge-field-dummy-component";
import { MergeObjectItemComponent } from './merge-object-item/merge-object-item.component';
import { MergeFieldItemComponent } from './merge-field-item/merge-field-item.component';

@NgModule({
  declarations: [
    MergeObjectListComponent,
    MergeObjectEditComponent,
    MergeObjectDummyComponent,
    MergeFieldDummyComponent,
    MergeObjectItemComponent,
    MergeFieldItemComponent
  ],
  imports: [CommonModule, FormsModule, MergeObjectRoutingModule]
})
export class MergeObjectModule {}
