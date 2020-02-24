import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { BsDropdownModule, ModalModule } from "ngx-bootstrap";
import { AlertModule } from "ngx-alerts";
//import { StorageServiceModule } from "ngx-webstorage-service";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import { MergeFieldModule } from "./features/merge-field/merge-field.module";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppEffects } from "./app.effects";

import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";
import { HomeComponent } from "./pages/home/home.component";
import { NavComponent } from "./shared/components/nav/nav.component";

import { MergeFieldApiService } from "./apis/merge-field-api.service";
import { ModelBuilderLocalApi } from "./apis/model-builder-local-api";

import { MERGE_FIELD_STORE_API } from "./stores/merge-field-store";
import { MODEL_FIELD_STORE_API } from "./stores/model-builder-store";

import { ModelBuilderModule } from "./features/model-builder/model-builder.module";
import { ModelBuilderStoreModule } from "./stores/model-builder-store/model-builder-store.module";

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([AppEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    MergeFieldModule,
    ModelBuilderStoreModule,
    ModelBuilderModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    AlertModule.forRoot({ maxMessages: 5, timeout: 2000, position: "right" })
  ],
  providers: [
    { provide: MERGE_FIELD_STORE_API, useClass: MergeFieldApiService },
    { provide: MODEL_FIELD_STORE_API, useClass: ModelBuilderLocalApi }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
