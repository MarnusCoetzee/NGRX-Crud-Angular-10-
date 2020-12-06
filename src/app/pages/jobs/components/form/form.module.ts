import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InputModule, FormFieldModule } from '../../../../shared/controls';
import { ButtonModule } from '../../../../shared/buttons';
import { FormComponent } from './form.component';
@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputModule,
    FormFieldModule,
    ButtonModule,
  ],
})
export class FormModule {}
