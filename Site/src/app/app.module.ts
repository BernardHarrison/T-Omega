import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StorageServiceModule } from "ngx-webstorage-service";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { MergeFieldModule } from "./features/merge-field/merge-field.module";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";
import { HomeComponent } from "./pages/home/home.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { NavComponent } from "./shared/components/nav/nav.component";

import { MAILING_ACTIVITY_API } from "./stores/merge-field-store";
import { MergeFieldApiService } from "./apis/merge-field-api.service";
import { BsDropdownModule, ModalModule } from "ngx-bootstrap";
import {
  ModelBuilderStoreModule,
  MODEL_BUILDER_STORE_API
} from "./stores/model-builder-store/model-builder-store.module";
import { ModelBuilderLocalApi } from "./apis/model-builder-local-api";
import { MERGE_FIELD_STORE_API_TOKEN } from "./stores/merge-field-api-store/merge-field-api-store.module";
import { ManageModelsComponent } from "./features/manage-models/manage-models.component";

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    NavComponent,
    ManageModelsComponent
  ],
  imports: [
    BrowserModule,
    StorageServiceModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    MergeFieldModule,
    ModelBuilderStoreModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [
    { provide: MERGE_FIELD_STORE_API_TOKEN, useClass: MergeFieldApiService },
    { provide: MODEL_BUILDER_STORE_API, useClass: ModelBuilderLocalApi }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
