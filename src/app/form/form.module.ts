import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuildComponent } from './form-build/form-build.component';
import { FormCtrlComponent } from './form-ctrl/form-ctrl.component';
import { FormArrComponent } from './form-arr/form-arr.component';


@NgModule({
  declarations: [
    FormBuildComponent,
    FormCtrlComponent,
    FormArrComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class FormModule { }
