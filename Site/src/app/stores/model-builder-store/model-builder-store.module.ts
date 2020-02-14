import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import * as fromModelBuilder from ".";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromModelBuilder.modelBuilderFeatureKey,
      fromModelBuilder.reducers
    )
  ]
})
export class ModelBuilderStoreModule {}
