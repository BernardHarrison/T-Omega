import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { DesignerVmModule } from './store/designer-vm.module';
import { RulerComponent } from './components/ruler/ruler.component';
import { TemplateComponent } from './components/template/template.component';
import { SizingHandleDirective } from './directives/sizing-handle.directive';



@NgModule({
  declarations: [
    AppComponent,
    RulerComponent,
    TemplateComponent,
    SizingHandleDirective
  ],
  imports: [
    BrowserModule,
    DesignerVmModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
