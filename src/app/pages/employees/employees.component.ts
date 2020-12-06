import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import { Store, select } from '@ngrx/store';
import { User } from './store/list/list.models';

import * as fromRoot from '../../store';
import * as fromList from './store/list';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeesComponent implements OnInit {
  employees$: Observable<User[]>;
  constructor(private store: Store<fromRoot.State>) {}

  ngOnInit(): void {
    this.employees$ = this.store.pipe(select(fromList.getItems));

    this.store.dispatch(new fromList.Read());
  }
}
