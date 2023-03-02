import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { AboutModule } from '../about/about.module';
import { JobsModule } from '../jobs/jobs.module';
import { ProjectsModule } from '../projects/projects.module';
import { ContactModule } from '../contact/contact.module';
import { QualificationModule } from '../qualification/qualification.module';
import { GoUpModule } from 'src/app/shared/components/go-up/go-up.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AboutModule,
    QualificationModule,
    JobsModule,
    ProjectsModule,
    ContactModule,
    GoUpModule
  ]
})
export class HomeModule { }
