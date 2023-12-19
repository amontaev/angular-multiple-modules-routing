import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHostComponent } from './admin-host.component';
import { PageNotFoundComponent } from '../../shared/page-not-found/page-not-found.component';

export const routes: Routes = [
    {
        path:'', component: AdminHostComponent,
        children: [
            { path: '', redirectTo: 'news', pathMatch: 'full' },
            {
                path: 'news', 
                loadChildren: () => import('../news/news.module').then(module => module.NewsModule),
            },
            {
                path: 'dashboard', 
                loadChildren: () => import('../dashboard/dashboard.module').then(module => module.DashboardModule),
            },
            {
                path: 'settings', 
                loadChildren: () => import('../settings/settings.module').then(module => module.SettingsModule),
            },
        ]
    },
    { path: '**', component:PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminHostRoutingModule { }
