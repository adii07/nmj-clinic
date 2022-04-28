import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ MatToolbarModule} from '@angular/material/toolbar'
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';



const library=[
  MatToolbarModule,
  MatDividerModule,
  MatIconModule
]

@NgModule({
  declarations: [],
  imports: library,
  exports:library
})
export class MaterialModule { }
