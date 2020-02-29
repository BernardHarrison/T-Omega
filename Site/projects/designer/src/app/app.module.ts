import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { DesignerVmModule } from './store/designer-vm.module';
import { TemplateComponent } from './components/template/template.component';
import { DESIGNER_STORE_API } from 'src/app/stores/designer-store';
import { DesignerStoreApi } from 'src/app/apis/designer-store-api.service';
import { DesignerStoreModule } from 'src/app/stores/designer-store/designer-store.module';



@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
  ],
  imports: [
    BrowserModule,
    DesignerVmModule,

    DesignerStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25 })

  ],
  providers: [
    { provide: DESIGNER_STORE_API, useClass: DesignerStoreApi }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
