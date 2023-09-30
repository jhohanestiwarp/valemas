import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    SidenavComponent,
  ],
  exports: [
    SidenavComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    MatIconModule
  ]
})
export class SharedModule { }
