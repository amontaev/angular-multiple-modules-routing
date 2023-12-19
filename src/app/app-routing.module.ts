import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './feature/auth/auth.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  {
    path:'auth',
    component:AuthComponent,
    loadChildren:() =>import('./feature/auth/auth.module').then(module => module.AuthModule)
  },
  {
    path:'admin',
    loadChildren:() =>import('./feature/admin-host/admin-host.module').then(module => module.AdminHostModule)
  },
  { path: '**', component:PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
