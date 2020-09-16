import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsyncPipeComponent } from './components/async-pipe/async-pipe.component';
import { CustomPipeComponent } from './components/custom-pipe/custom-pipe.component';
import { PipeRoutingModule } from './pipe-routing.module';
import { GetCharPipe } from 'src/app/pipes/getchar.pipe';



@NgModule({
  declarations: [
    AsyncPipeComponent,
    CustomPipeComponent,
    GetCharPipe,

  ],
  imports: [
    CommonModule,
    PipeRoutingModule
  ]
})
export class PipeModule { }
