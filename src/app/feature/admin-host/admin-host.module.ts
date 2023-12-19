import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHostComponent } from './admin-host.component';
import { RouterModule } from '@angular/router';
import { AdminHostRoutingModule } from './admin-host-routing.module';

@NgModule({
  declarations: [
    AdminHostComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AdminHostRoutingModule,
  ]
})
export class AdminHostModule { }
