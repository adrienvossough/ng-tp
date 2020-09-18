import { NotFoundComponent } from './components/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuicklinkModule, QuicklinkStrategy } from 'ngx-quicklink';

const routes: Routes = [
  {
    path: 'forms',
    loadChildren: () => import('./modules/form/form.module').then(m => m.FormModule)
  },
  {
    path: 'pipes',
    loadChildren: () => import('./modules/pipe/pipe.module').then(m => m.PipeModule),
    // data: {
    //   preload: false
    // },
  },
  {
    path: 'detection',
    loadChildren: () => import('./modules/detection/detection.module').then(m => m.DetectionModule)
  },
  { path: '', redirectTo: '/forms', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [
    QuicklinkModule,
    RouterModule.forRoot(routes, { preloadingStrategy: QuicklinkStrategy })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
