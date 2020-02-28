import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { MergeObjectRoutingModule } from "./merge-object-routing.module";
import { MergeObjectListComponent } from "./merge-object-list/merge-object-list.component";
import { MergeObjectEditComponent } from "./merge-object-edit/merge-object-edit.component";
import { StoreModule } from "@ngrx/store";
import * as fromMergeObjectFeature from "./store/merge-object-feature.reducer";
import { EffectsModule } from "@ngrx/effects";
import { MergeObjectFeatureEffects } from "./store/merge-object-feature.effects";
import { MergeObjectDummyComponent } from "./components/merge-object-dummy/merge-object-dummy.component";
import { MergeFieldDummyComponent } from "./components/merge-field-dummy/merge-field-dummy-component";

@NgModule({
  declarations: [
    MergeObjectListComponent,
    MergeObjectEditComponent,
    MergeObjectDummyComponent,
    MergeFieldDummyComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MergeObjectRoutingModule,
    StoreModule.forFeature(
      fromMergeObjectFeature.mergeObjectFeatureFeatureKey,
      fromMergeObjectFeature.reducer
    ),
    EffectsModule.forFeature([MergeObjectFeatureEffects])
  ]
})
export class MergeObjectModule {}
