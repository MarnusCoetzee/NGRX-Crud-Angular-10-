import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Observable, zip } from 'rxjs';
import { takeUntil, switchMap } from 'rxjs/operators';
import { StepperService } from './components/stepper/services/stepper.service';
import { Store, select } from '@ngrx/store';
import * as fromRoot from '../../../../store';
import * as fromDictionaries from '../../../../store/dictionaries';
import * as fromUser from '../../../../store/user';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit, OnDestroy {
  dictionaries$: Observable<fromDictionaries.Dictionaries>;
  dictionariesIsReady$: Observable<boolean>;

  // personal$: Observable<PersonalForm>;
  // professional$: Observable<ProfessionalForm>;

  loading$: Observable<boolean>;

  // private profile$: Observable<ProfileForm>;
  private user: fromUser.User;

  private isEditing: boolean;
  private destroy = new Subject<any>();
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<fromRoot.State>,
    public stepper: StepperService
  ) {}

  ngOnInit(): void {
    this.stepper.init([
      { key: 'personal', label: 'Personal' },
      { key: 'professional', label: 'Professional' },
    ]);

    this.stepper.complete$.pipe(takeUntil(this.destroy)).subscribe(() => {
      console.log('complete');
    });

    this.stepper.cancel$.pipe(takeUntil(this.destroy)).subscribe(() => {
      console.log('cancel');
    });
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
