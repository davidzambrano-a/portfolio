import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) }, 
  { path: 'about', loadChildren: () => import('./components/about/about.module').then(m => m.AboutModule) }, 
  { path: 'qualification', loadChildren: () => import('./components/qualification/qualification.module').then(m => m.QualificationModule) }, 
  { path: 'projects', loadChildren: () => import('./components/projects/projects.module').then(m => m.ProjectsModule) }, 
  { path: 'contact', loadChildren: () => import('./components/contact/contact.module').then(m => m.ContactModule) }, 
  { path: 'jobs', loadChildren: () => import('./components/jobs/jobs.module').then(m => m.JobsModule) },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
