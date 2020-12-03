import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { ReactiveFormsModule } from '@angular/forms';
import {
  AutocompleteModule,
  CheckboxesModule,
  DateRangeModule,
  FormFieldModule,
  InputModule,
  RadiosModule,
  SelectModule,
} from 'src/app/shared/controls';
import { ButtonModule } from 'src/app/shared/buttons';
import { SpinnerModule } from 'src/app/shared/indicators';
import { FilesUploadModule } from 'src/app/shared/popups/files-upload/files-upload.module';

@NgModule({
  declarations: [FormComponent],
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
    // StepperModule
  ],
})
export class FormModule {}
