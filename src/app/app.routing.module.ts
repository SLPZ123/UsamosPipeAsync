import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const rutas: Routes = [
 //{path: '', component: InicioComponent }
]

@NgModule({
    imports: [
        RouterModule.forRoot(rutas)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{}
