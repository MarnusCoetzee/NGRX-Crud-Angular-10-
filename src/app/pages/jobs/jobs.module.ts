import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';
import { JobsComponent } from './jobs.component';
import { JobComponent } from './components/job/job.component';
import { FormComponent } from './components/form/form.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MatDialogModule } from '@angular/material/dialog';
import { ButtonModule } from 'src/app/shared/buttons';
import { FormModule } from '../profile/pages/form/form.module';
import { reducers, effects } from './store';
import { ReactiveFormsModule } from '@angular/forms';
import { FormFieldModule, InputModule } from 'src/app/shared/controls';
@NgModule({
  declarations: [JobsComponent, JobComponent, FormComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('jobs', reducers),
    EffectsModule.forFeature(effects),
    JobsRoutingModule,
    MatDialogModule,
    ButtonModule,
    FormModule,
    ReactiveFormsModule,
    FormFieldModule,
    ButtonModule,
    InputModule,
  ],
})
export class JobsModule {}
