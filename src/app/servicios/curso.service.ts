import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map, Observable, Subject } from 'rxjs';
import { Curso } from '../models/curso';
import { Datos } from '../data/cursos';


@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private cursos: Curso[] = Datos.cursos;
  private cursosSubject: BehaviorSubject<Curso[]>;
  constructor() {
    this.cursosSubject = new BehaviorSubject<Curso[]>(this.cursos);
   }

   obtenerCursos(): Observable<Curso[]>{
    return this.cursosSubject.asObservable();
  }
}