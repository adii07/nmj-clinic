import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ MatToolbarModule} from '@angular/material/toolbar'
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';

const library=[
  MatToolbarModule,
  MatDividerModule,
  MatIconModule,
  MatButtonModule,
  MatSidenavModule
]

@NgModule({
  declarations: [],
  imports: library,
  exports:library
})
export class MaterialModule { }
