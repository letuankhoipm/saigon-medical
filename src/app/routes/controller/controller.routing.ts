import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ControllerComponent } from './controller.component';

const routes: Routes = [
    {
        path: '',
        component: ControllerComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ]
})
export class ControllerRoutingModule { }
