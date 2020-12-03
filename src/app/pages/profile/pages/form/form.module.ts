import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import {
  FormFieldModule,
  InputModule,
  AutocompleteModule,
  SelectModule,
  CheckboxesModule,
  RadiosModule,
  DateRangeModule,
} from '../../../../shared/controls';
import { FilesUploadModule } from '../../../../shared/popups/files-upload/files-upload.module';
import { SpinnerModule } from '../../../../shared/indicators';
// import { UserPhotoModule } from '../../../../shared/';
import { ButtonModule } from '../../../../shared/buttons';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';

import { StepperModule } from './components';
import { PersonalComponent } from './components/personal/personal.component';
import { ProfessionalComponent } from './components/professional/professional.component';

import { MapperService } from './services/mapper/mapper.service';

@NgModule({
  declarations: [FormComponent, PersonalComponent, ProfessionalComponent],
  imports: [
    CommonModule,
    FormRoutingModule,
    ReactiveFormsModule,
    FormFieldModule,
    InputModule,
    AutocompleteModule,
    SelectModule,
    CheckboxesModule,
    RadiosModule,
    DateRangeModule,
    FilesUploadModule,
    SpinnerModule,
    // UserPhotoModule,
    ButtonModule,
    StepperModule,
  ],
  providers: [MapperService],
})
export class FormModule {}
