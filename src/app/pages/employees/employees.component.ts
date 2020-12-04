import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
