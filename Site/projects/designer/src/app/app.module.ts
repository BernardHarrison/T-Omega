import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NguCarouselModule } from '@ngu/carousel';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { DESIGNER_STORE_API } from 'src/app/stores/designer-store';
import { DesignerStoreApi } from 'src/app/apis/designer-store-api.service';
import { DesignerStoreModule } from 'src/app/stores/designer-store/designer-store.module';

import { DesignerVmModule } from './store/designer-vm.module';

import { AppComponent } from './app.component';
import { TemplateComponent } from './components/template/template.component';
import { DesignerSectionsComponent } from './components/designer-sections/designer-sections.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    DesignerSectionsComponent,
  ],
  imports: [
    BrowserModule,
    NguCarouselModule,

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
