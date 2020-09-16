import { FormArrComponent } from './components/form-arr/form-arr.component';
import { FormCtrlComponent } from './components/form-ctrl/form-ctrl.component';
import { RouterModule, Routes } from '@angular/router';
import { FormBuildComponent } from './components/form-build/form-build.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    { path: 'build', component: FormBuildComponent },
    { path: 'control', component: FormCtrlComponent },
    { path: 'array', component: FormArrComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FormRoutingModule { }