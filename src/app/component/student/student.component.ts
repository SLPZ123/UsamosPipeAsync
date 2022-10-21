import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { Datos } from '../../data/alumnos';
import { MatTableDataSource } from '@angular/material/table';
import { Alumno } from 'src/app/models/alumno';
import { MatDialog } from '@angular/material/dialog';
import { FormularioAltaAlumnoComponent } from '../formulario-alta-alumno/formulario-alta-alumno.component';
import { AlumnoService } from 'src/app/servicios/alumno.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  //alumnos: Alumno[] = Datos.alumnos;
  alumnos!: Alumno[]
  columnas: string[] = ['nombre', 'curso', 'edad', 'dni', 'acciones'];
  //dataSource: MatTableDataSource<Alumno> = new MatTableDataSource<Alumno>(this.alumnos);
  dataSource!: MatTableDataSource<Alumno>;
  //promesa: any;
  suscripcion: any;

  constructor(private dialog: MatDialog, private alumnoService :  AlumnoService) {

   }



  ngOnInit(): void {
 
         this.suscripcion = this.alumnoService.obtenerAlumnos().subscribe(datos =>{
          this.alumnos = datos;
          this.dataSource = new MatTableDataSource<Alumno>(this.alumnos);
         })

  }

  ngOnDestroy(){
    this.suscripcion.unsubscribe();
  }

  borrar(id : number)
  {
    let position = this.alumnos.findIndex(alumno => alumno.id == id)
    this.alumnos.splice(position, 1)
    this.dataSource.data = this.alumnos;
  }

  openDialog() {
    let dialog = this.dialog.open(FormularioAltaAlumnoComponent, {
      width: '50%',
      height: '50%',
      
    });

    dialog.beforeClosed().subscribe(res => {
      //console.log(res);
      if(res != null || res != undefined)
      {
        this.alumnos.push(
          {
            ...res,
            id:this.alumnos.length+1
          }
        );
        this.dataSource.data = this.alumnos;
      }
    });
  }

}