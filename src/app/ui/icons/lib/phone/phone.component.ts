import { ChangeDetectionStrategy, Component } from '@angular/core'

import { IconComponent } from '@fp/ui/icons'

@Component({
  selector: 'fp-phone-icon',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './phone.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhoneIconComponent {}
