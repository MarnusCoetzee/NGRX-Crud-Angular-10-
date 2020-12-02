import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './registration.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import {
  FormFieldModule,
  InputModule,
  PasswordModule,
} from '../../../../shared/controls';
import { ButtonModule } from '../../../../shared/buttons';
import { SpinnerModule } from '../../../../shared/indicators';
@NgModule({
  declarations: [RegistrationComponent],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormFieldModule,
    InputModule,
    PasswordModule,
    ButtonModule,
    SpinnerModule,
  ],
})
export class RegistrationModule {}
