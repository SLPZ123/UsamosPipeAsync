import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-formulario-alta-alumno',
  templateUrl: './formulario-alta-alumno.component.html',
  styleUrls: ['./formulario-alta-alumno.component.css']
})
export class FormularioAltaAlumnoComponent implements OnInit {
 
  formularioAlumno: FormGroup;
  cursos: string[] = ['React JS', 'Angular', 'Vue JS'];
  
  constructor( public dialogRef: MatDialogRef<FormularioAltaAlumnoComponent>, private fb: FormBuilder) {
    this.formularioAlumno = fb.group({
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      curso: new FormControl('', [Validators.required]),
      edad: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
      dni: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
    });
   }

   cambiarCurso(e: any) {
    
  }

  ngOnInit(): void {
  }

  agregarAlumno(){
    this.dialogRef.close(this.formularioAlumno.value);
  }

}
