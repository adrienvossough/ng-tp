import { DetectionRoutingModule } from './detection-routing.module';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DefautComponent } from './components/defaut/defaut.component';
import { PushComponent } from './components/push/push.component';
import { GetzoneComponent } from './components/getzone/getzone.component';


@NgModule({
    declarations: [
        DefautComponent,
        PushComponent,
        GetzoneComponent
    ],
    imports: [
        HttpClientModule,
        DetectionRoutingModule
    ],
    exports: [
        HttpClientModule
    ],
})
export class DetectionModule { }
