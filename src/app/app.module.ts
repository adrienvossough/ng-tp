import { DetectionModule } from './modules/detection/detection.module';
import { PipeModule } from './modules/pipe/pipe.module';
import { FormModule } from './modules/form/form.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ApiModule } from './modules/api/api.module';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    FormModule,
    PipeModule,
    BrowserModule,
    AppRoutingModule,
    ApiModule,
    DetectionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
