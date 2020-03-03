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

import { MERGE_FIELD_STORE_API } from "./stores/merge-field-store";

import { MergeObjectModule } from "./features/merge-object/merge-object.module";
import { MERGE_OBJECT_STORE_API } from "./stores/merge-object-store";
import { MergeObjectApiService } from "./apis/merge-object-api.service";
import { MergeObjectStoreModule } from "./stores/merge-object-store/merge-object-store.module";
import { ModelApiService } from "./apis/model-api.service";
import { MODEL_STORE_API } from "./stores/model-store";

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
    MergeObjectStoreModule,
    MergeObjectModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    AlertModule.forRoot({ maxMessages: 5, timeout: 2000, position: "right" })
  ],
  providers: [
    { provide: MERGE_FIELD_STORE_API, useClass: MergeFieldApiService },
    { provide: MERGE_OBJECT_STORE_API, useClass: MergeObjectApiService },
    { provide: MODEL_STORE_API, useClass: ModelApiService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
