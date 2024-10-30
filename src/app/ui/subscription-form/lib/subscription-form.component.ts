import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'
import { CheckboxModule } from 'primeng/checkbox'
import { InputTextModule } from 'primeng/inputtext'

import { PlainButtonComponent } from '@fp/ui/buttons'

import { SubscriptionFormService } from './subscriptio-form.service'

@Component({
  selector: 'fp-subscription-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, InputTextModule, CheckboxModule, PlainButtonComponent],
  templateUrl: './subscription-form.component.html',
  styleUrl: './subscription-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubscriptionFormComponent {
  private readonly subscriptionFormService = inject(SubscriptionFormService)
  public form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/)]),
    consent: new FormControl(false, Validators.required),
  })

  public text = ''

  public submitForm() {
    if (this.form.valid) {
      this.text = 'Подписка на новости офомлена!'
      const formData = { email: this.form.value.email, consent: true }

      this.subscriptionFormService.postSubscriptionData(formData)
    } else {
      this.text = 'Заполните форму правильно!'
      console.log(this.form.value.consent)
    }
  }
}
