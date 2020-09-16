import { FormRoutingModule } from './form-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuildComponent } from './components/form-build/form-build.component';
import { FormCtrlComponent } from './components/form-ctrl/form-ctrl.component';
import { FormArrComponent } from './components/form-arr/form-arr.component';


@NgModule({
  declarations: [
    FormBuildComponent,
    FormCtrlComponent,
    FormArrComponent,
  ],
  imports: [
    CommonModule,
    FormRoutingModule
  ]
})
export class FormModule { }
