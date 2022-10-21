import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Alumno } from '../models/alumno';
import { Datos } from '../data/alumnos';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  alumnos: Alumno[] = Datos.alumnos;
  private alumnosSubjetc: BehaviorSubject<Alumno[]>;

  constructor() { 
   this.alumnosSubjetc = new BehaviorSubject<Alumno[]>(this.alumnos);
  }

  obtenerAlumnosPromise(): Promise<Alumno[] | any>{
    return new Promise((resolve, reject) => {
      if(this.alumnos.length > 0){
        resolve(this.alumnos);
      }else{
        reject({
          codigo: 0,
          mensaje: 'No hay alumnos disponibles en este momento'
        });
      }
    });
  }

  obtenerAlumnos(): Observable<Alumno[]>{
    return this.alumnosSubjetc.asObservable();
  }

}