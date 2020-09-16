import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsyncPipeComponent } from './async-pipe/async-pipe.component';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { PipeRoutingModule } from './pipe-routing.module';



@NgModule({
  declarations: [
    AsyncPipeComponent,
    CustomPipeComponent
  ],
  imports: [
    CommonModule,
    PipeRoutingModule
  ]
})
export class PipeModule { }
