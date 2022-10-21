import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formularioUsuario : FormGroup;

  constructor(private fb: FormBuilder) {
    this.formularioUsuario = fb.group({
      nombre : new FormControl()
    })
   }

  ngOnInit(): void {
  }

}