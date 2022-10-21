import { Pipe, PipeTransform } from '@angular/core';
import { Alumno } from '../models/alumno';

@Pipe({
  name: 'nombreApellido'
})
export class NombreApellidoPipe implements PipeTransform {

  transform(value: Alumno, ...args: string[]): string {
    return value.nombre+'  '+value.apellido;
  }

}