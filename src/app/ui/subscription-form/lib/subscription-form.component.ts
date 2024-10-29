import { Component } from '@angular/core'
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CheckboxModule } from 'primeng/checkbox'
import { InputTextModule } from 'primeng/inputtext'

import { PlainButtonComponent } from '@fp/ui/buttons'

@Component({
  selector: 'fp-subscription-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, InputTextModule, CheckboxModule, PlainButtonComponent],
  template: `
    <div class="rounded-2xl bg-light-grey min-h-[256px] p-8 tablet:p-4">
      <h3 class="font-semibold text-[25px] mb-4">Подписаться на новости</h3>
      <div class="flex items-center mb-5">
        <span class="h-1.5 w-1/2 bg-orange"></span>
        <span class="h-1.5 w-1/2 bg-blue"></span>
      </div>
      <form [formGroup]="form">
        <input
          type="text"
          pInputText
          placeholder="Ваш e-mail"
          class="w-full mb-7 px-5 py-3 rounded-md"
          formControlName="email"
        />
        <div class="flex tablet:flex-wrap items-center justify-between gap-3">
          <div class="flex items-center gap-2">
            <p-checkbox formControlName="consent" value="true" />
            <span class="text-[10px] text-grey-indicator"
              >Соглашаюсь с <a href="/privacy-policy" class="text-blue">политикой конфиденциальности</a></span
            >
          </div>
          <fp-plain-button
            label="Подписаться"
            className="bg-orange text-white hover:bg-active-orange disabled:bg-active-orange h-10 tablet:w-full"
            (click)="handleSubscriptionClick()"
          />
        </div>
      </form>
    </div>
  `,
  styles: `
    :host {
      @apply block;

      ::ng-deep .p-checkbox-box {
        @apply border border-grey-strok;
      }

      ::ng-deep .p-checkbox-box.p-highlight {
        @apply border border-transparent bg-orange;
      }

      ::ng-deep .p-checkbox-box.p-focus {
        @apply shadow-none border border-orange;
      }

      ::ng-deep .p-inputtext {
        @apply border border-grey-strok;
      }

      ::ng-deep .p-inputtext:focus {
        @apply border border-orange;
      }
    }
  `,
})
export class SubscriptionFormComponent {
  public form = new FormGroup({
    email: new FormControl(''),
    consent: new FormControl(false),
  })

  public handleSubscriptionClick() {
    alert('TODO: добавить обработку подписки')
  }
}
