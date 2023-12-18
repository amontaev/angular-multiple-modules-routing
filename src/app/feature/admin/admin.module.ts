import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { Page1Component } from './pages/page-1/page-1.component';
import { Page2Component } from './pages/page-2/page-2.component';



@NgModule({
  declarations: [
    AdminComponent,
    Page1Component,
    Page2Component
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
