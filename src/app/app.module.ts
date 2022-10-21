import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { NavbarComponent } from './component/demo-navbar/demo-navbar.component';
import { ToolbarComponent } from './component/demo-toolbar/toolbar.component';
import { StudentComponent } from './component/student/student.component';
import { FormularioComponent} from './component/formulario/formulario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { NombreApellidoPipe } from './pipes/nombre-apellido.pipe';
import { BooleanEstiloDirective } from './directive/boolean-estilo.directive';
import { FormularioAltaAlumnoComponent } from './component/formulario-alta-alumno/formulario-alta-alumno.component';
import { ListaCursosComponent } from './component/lista-cursos/lista-cursos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    ToolbarComponent,
    StudentComponent,
    FormularioComponent,
    NombreApellidoPipe,
    BooleanEstiloDirective,
    FormularioAltaAlumnoComponent,
    ListaCursosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }