import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { BsDropdownModule, ModalModule } from "ngx-bootstrap";
import { AlertModule } from "ngx-alerts";
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
import { MergeObjectModule } from "./features/merge-object/merge-object.module";
import { MERGE_OBJECT_STORE_API } from "./stores/merge-object-store";
import { MergeObjectApiService } from "./apis/merge-object-api.service";
import { MergeObjectStoreModule } from "./stores/merge-object-store/merge-object-store.module";
import { MergeObjectComponentComponent } from "./features/merge-object-component/merge-object-component.component";

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
    MergeObjectStoreModule,
    ModelBuilderModule,
    MergeObjectModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    AlertModule.forRoot({ maxMessages: 5, timeout: 2000, position: "right" })
  ],
  providers: [
    { provide: MERGE_FIELD_STORE_API, useClass: MergeFieldApiService },
    { provide: MODEL_FIELD_STORE_API, useClass: ModelBuilderLocalApi },
    { provide: MERGE_OBJECT_STORE_API, useClass: MergeObjectApiService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
