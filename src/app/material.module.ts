import { NgModule } from "@angular/core";

import{MatTableModule}from '@angular/material/table';
import{MatCardModule}from '@angular/material/card';
import{MatButtonModule}from '@angular/material/button';
import{MatFormFieldModule}from '@angular/material/form-field';
import{MatInputModule}from '@angular/material/input';
import{MatIconModule}from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';




@NgModule({
    imports:[
        MatTableModule,
        MatCardModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatDialogModule
    ],
    exports:[
        MatTableModule,
        MatCardModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatDialogModule
    ]

})
export class MaterialModule{}