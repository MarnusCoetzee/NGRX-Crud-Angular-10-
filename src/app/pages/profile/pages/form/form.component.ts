import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subject, Observable, zip } from 'rxjs';
import { takeUntil, switchMap } from 'rxjs/operators';
import { StepperService } from './components/stepper/services/stepper.service';
import { Store, select } from '@ngrx/store';
import * as fromRoot from '../../../../store';
import * as fromDictionaries from '../../../../store/dictionaries';
import * as fromUser from '../../../../store/user';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonalForm } from './components/personal/personal.component';
import { ProfessionalForm } from './components/professional/professional.component';

export interface ProfileForm {
  personal: PersonalForm;
  professional: ProfessionalForm;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent implements OnInit, OnDestroy {
  dictionaries$: Observable<fromDictionaries.Dictionaries>;
  dictionariesIsReady$: Observable<boolean>;

  personal$: Observable<PersonalForm>;
  professional$: Observable<ProfessionalForm>;

  loading$: Observable<boolean>;

  private profile$: Observable<ProfileForm>;
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
    this.user = this.route.snapshot.data.user;
    this.isEditing = !!this.user;
    // this.profile$ = this.store.pipe(select(fromForm.getFormState));
    // this.personal$ = this.store.pipe(select(fromForm.getPersonalForm));
    // this.professional$ = this.store.pipe(select(fromForm.getProfessionalForm));
    this.dictionaries$ = this.store.pipe(
      select(fromDictionaries.getDictionaries)
    );
    this.dictionariesIsReady$ = this.store.pipe(
      select(fromDictionaries.getIsReady)
    );

    this.stepper.init([
      { key: 'professional', label: 'Professional' },
      { key: 'personal', label: 'Personal' },
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

  get title(): string {
    return this.isEditing ? 'Edit Profile' : 'New Profile';
  }

  onChangedPersonal(data: PersonalForm): void {
    console.log('personal changed', data);
  }

  onChangedProfessional(data: ProfessionalForm): void {
    console.log('professional changed', data);
  }
}
