import { CustomPipeComponent } from './components/custom-pipe/custom-pipe.component';
import { AsyncPipeComponent } from './components/async-pipe/async-pipe.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'async', component: AsyncPipeComponent },
    { path: 'custom', component: CustomPipeComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PipeRoutingModule { }