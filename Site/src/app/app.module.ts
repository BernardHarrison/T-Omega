import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { MergeFieldApi } from './features/merge-field'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StorageServiceModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25 })
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
