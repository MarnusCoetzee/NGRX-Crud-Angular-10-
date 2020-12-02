import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { ButtonsModule } from '../../../../shared/buttons/buttons.module';
import { InputModule } from '../../../../shared/controls/input/input.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ControlsModule } from '../../../../shared/controls/controls.module';
import { IndicatorsModule } from '../../../../shared/indicators/indicators.module';
import { PopupsModule } from '../../../../shared/popups/popups.module';
@NgModule({
  declarations: [SharedComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ButtonsModule,
    InputModule,
    ReactiveFormsModule,
    ControlsModule,
    IndicatorsModule,
    PopupsModule,
  ],
})
export class SharedModule {}
